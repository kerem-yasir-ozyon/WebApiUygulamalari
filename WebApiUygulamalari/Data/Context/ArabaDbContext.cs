using Microsoft.EntityFrameworkCore;

namespace WebApiUygulamalari.Data.Context
{
    public class ArabaDbContext : DbContext
    {
        public DbSet<Araba> Arabalar { get; set; }
        public ArabaDbContext(DbContextOptions<ArabaDbContext> options) : base(options)
        {

        }
    }
}
