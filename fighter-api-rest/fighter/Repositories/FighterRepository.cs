using Microsoft.EntityFrameworkCore;
using fighter.Data;
using fighter.Models;

namespace fighter.Repositories
{
    public class FighterRepository : IFighterRepository
    {
        private readonly ApplicationDbContext _context;

        public FighterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Fighter>> GetAllAsync()
        {
            return await _context.Fighters.ToListAsync();
        }

        public async Task<Fighter> GetByIdAsync(int id)
        {
            return await _context.Fighters.FindAsync(id);
        }

        public async Task AddAsync(Fighter fighter)
        {
            _context.Fighters.Add(fighter);
            await _context.SaveChangesAsync();
        }

        public void Update(Fighter fighter)
        {
            _context.Entry(fighter).State = EntityState.Modified;
        }

        public void Delete(Fighter fighter)
        {
            _context.Fighters.Remove(fighter);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
