using Microsoft.EntityFrameworkCore;

namespace WebApiSanat.Data.Context
{
    public class SanatDbContext : DbContext
    {
        public DbSet<Tablo> Tablolar { get; set; }
        public SanatDbContext(DbContextOptions<SanatDbContext> options) : base(options) 
        {
            
        }
    }
}
