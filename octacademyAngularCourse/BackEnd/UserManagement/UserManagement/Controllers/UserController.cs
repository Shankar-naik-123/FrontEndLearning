using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Threading.Tasks;
using UserManagement.Models;

namespace UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {
        IConfiguration _configuration;
        private UserContext _userContext;

        public UserController(IConfiguration configuration, UserContext userContext)
        {
            _configuration = configuration;
            _userContext = userContext;
        }
        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsersAsync()
        {
            return Ok(await _userContext.Users.ToListAsync());
        }

        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUser(User user)
        {
            if (user == null)
            {
                return BadRequest("Body Cannot be Null!");
            }
            var u = _userContext.Users.Where(x => x.Email == user.Email).ToList().FirstOrDefault();
            if (u!=null)
            {
                return Ok("Email Alreday Exists!");
            }
            user.Id=Guid.NewGuid();
            await _userContext.Users.AddAsync(user);
           await _userContext.SaveChangesAsync();
            return Ok("User Added Succesfully!");
        }
        [HttpGet("GetUser")]
        
        public async Task<IActionResult> GetUser([FromQuery]string email)
        {
            var user = await _userContext.Users.Where(x => x.Email == email).FirstOrDefaultAsync();
            return Ok(user);

           
        }

        [HttpPut("UpdateUser")]
        public async Task<IActionResult> UpdateUser(User user)
        {
            User u = await _userContext.Users.Where(x => x.Email == user.Email).FirstOrDefaultAsync();

            if (u != null)
            {
                u.Address = user.Address;   
                u.Name = user.Name;
                await _userContext.SaveChangesAsync();
                return Ok("Updated User information !");
            }
            return NotFound("No User found !");

        }

        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> DeleteUser([FromQuery] string email)
        {
            var u = await _userContext.Users.Where(x => x.Email ==email).ToListAsync();

            if (u != null)
            {
               _userContext.Users.RemoveRange(u);
                await _userContext.SaveChangesAsync();
                return Ok("Successfully Deleted User!");
            }
            return NotFound("No User found !");

        }


    }
}
