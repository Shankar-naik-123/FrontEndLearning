using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHero.BackEnd.Models;

using superHero = SuperHero.BackEnd.Models.SuperHero;

namespace SuperHero.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("corspolicy")]
    public class SuperHeroController : ControllerBase
    {
        private readonly SuperHeroContext _context;

        public SuperHeroController(SuperHeroContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<superHero>>> GetSuperHeros()
        {

            return await _context.superHeroes.ToListAsync(); ;


        }

        [HttpPost]
        public async Task<IActionResult> CreateSuperHero(superHero hero)
        {
            var existhero = _context.superHeroes.Where(x => x.Name == hero.Name).FirstOrDefault();
            if(existhero!=null)
            {
                return BadRequest("Already Hero Exists with this Name!");
            }
            await _context.superHeroes.AddAsync(hero);
            await _context.SaveChangesAsync();
            return Ok("Created the Record !");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSuperHero(superHero hero)
        {
            var existhero = _context.superHeroes.Where(x => x.Name == hero.Name).FirstOrDefault();
            if (existhero != null)
            {
                existhero.FirstName = hero.FirstName;
                existhero.LastName = hero.LastName;
                existhero.Place = hero.Place;
                await _context.SaveChangesAsync();
                return Ok ("Updated the Hero Details!");
            }
            else
            {
                
                return NotFound ("Hero Not Found !");
            }

        }

        [HttpDelete("{heroName}")]
        public async Task<IActionResult> DeleteSuperHero( [FromRoute] string heroName)
        {
            var hero = await _context.superHeroes.Where(x => x.Name == heroName).FirstOrDefaultAsync();
            if (hero != null)
            {
                _context.superHeroes.Remove(hero);
                await _context.SaveChangesAsync();
                return Ok($"Delete the Hero {heroName}");
            }
            else
            {
                return NotFound("Hero Not Found !");
            }
        
        }

    }


}
