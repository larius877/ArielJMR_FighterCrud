using fighter.Models;
using fighter.Repositories;

namespace fighter.Services
{
    public class FighterService : IFighterService
    {
        private readonly IFighterRepository _fighterRepository;

        public FighterService(IFighterRepository zumoRepository)
        {
            _fighterRepository = zumoRepository;
        }

        public async Task<IEnumerable<Fighter>> GetAllFighterAsync()
        {
            return await _fighterRepository.GetAllAsync();
        }

        public async Task<Fighter> GetFighterByIdAsync(int id)
        {
            return await _fighterRepository.GetByIdAsync(id);
        }

        public async Task AddFighterAsync(Fighter fighter)
        {
            await _fighterRepository.AddAsync(fighter);
        }

        public async Task UpdateFighterAsync(Fighter fighter)
        {
            _fighterRepository.Update(fighter);
            await _fighterRepository.SaveAsync();
        }

        public async Task DeleteFighterAsync(int id)
        {
            var fighter = await _fighterRepository.GetByIdAsync(id);
            if (fighter != null)
            {
                _fighterRepository.Delete(fighter);
                await _fighterRepository.SaveAsync();
            }
        }
    }
}
