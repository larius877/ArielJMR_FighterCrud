using Microsoft.EntityFrameworkCore;
using fighter.Models;

namespace fighter.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Fighter> Fighters { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Fighter>(entity =>
            {
                entity.ToTable("Fighters");

                entity.Property(e => e.name)
                     .IsRequired()
                     .HasMaxLength(100);

                entity.Property(e => e.address)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.nationality)
                    .IsRequired()
                    .HasMaxLength(56);
            });
        }
    }
}
