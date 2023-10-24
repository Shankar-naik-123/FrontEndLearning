using FoodMineAccessControl.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Reflection.Metadata;
using System.Security.Claims;
using System.Text;

namespace FoodMineAccessControl.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  { IConfiguration configuration;
    public AuthController(IConfiguration _)
    {
        this.configuration = _;
    }

    [HttpPost("Login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login([FromBody] UserLogin userLogin)
    {
      var user = DataStore.DataStore.Users().FirstOrDefault(x => x.UserName == userLogin.UserName
      && x.Password == userLogin.Password);

      if (user != null)
      {
        return Ok(GenerateToken(user));
      }
      return NotFound("User Not Found!");
    }

    private string GenerateToken(UserModel user)
    {
      var key = configuration["Jwt:Key"];
      var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

      var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

      var claims = new[]
      {
        new Claim(ClaimTypes.NameIdentifier,user.UserName),
        new Claim(ClaimTypes.Email,user.Email),
        new Claim(ClaimTypes.Surname,user.Surname),
        new Claim(ClaimTypes.Role,user.Role),
      };

      var token = new JwtSecurityToken(
        configuration["Jwt:Issuer"],
        configuration["Jwt:Audience"],
        claims,
        expires: DateTime.Now.AddMinutes(Convert.ToDouble(configuration["Jwt:Duration"])),
        signingCredentials: credentials
        );

      return new JwtSecurityTokenHandler().WriteToken(token); 
      
    }
  }
}
