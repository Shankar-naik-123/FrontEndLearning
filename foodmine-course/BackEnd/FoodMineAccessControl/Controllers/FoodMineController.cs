using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodMineAccessControl.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FoodMineController : ControllerBase
  {
    [Authorize(Roles ="user,admin")]
    [HttpGet("showfoods")]
    public async Task<IActionResult> GetFoods()
    {
      return Ok("Food List");
    }

    [Authorize(Roles = "admin")]
    [HttpPost("addfood")]
    public async Task<IActionResult> AddFoods()
    {
      return Ok("Added the Food to the Kitchen!");
    }
  }
}
