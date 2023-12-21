using fighter.Models;

namespace fighter.Repositories
{
    public interface IFighterRepository
    {
        Task<IEnumerable<Fighter>> GetAllAsync();
        Task<Fighter> GetByIdAsync(int id);
        Task AddAsync(Fighter zumo);
        void Update(Fighter zumo);
        void Delete(Fighter zumo);
        Task SaveAsync();
    }
}
