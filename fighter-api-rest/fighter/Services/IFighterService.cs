using fighter.Models;

namespace fighter.Services
{
    public interface IFighterService
    {
        Task<IEnumerable<Fighter>> GetAllFighterAsync();
        Task<Fighter> GetFighterByIdAsync(int id);
        Task AddFighterAsync(Fighter fighter);
        Task UpdateFighterAsync(Fighter fighter);
        Task DeleteFighterAsync(int id);
    }
}
