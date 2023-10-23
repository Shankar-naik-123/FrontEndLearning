using Microsoft.EntityFrameworkCore;

namespace SuperHero.BackEnd.Models
{
    public class SuperHeroContext:DbContext
    {
        public SuperHeroContext(DbContextOptions<SuperHeroContext> options):base(options)
        {              
        }
        public DbSet<SuperHero> superHeroes { get; set; }   
    }
}
