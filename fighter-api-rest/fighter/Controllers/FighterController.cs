using Microsoft.AspNetCore.Mvc;
using fighter.Services;
using fighter.Models;

namespace fighter.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FighterController : ControllerBase
    {
        private readonly IFighterService _fighterService;

        public FighterController(IFighterService fighterService)
        {
            _fighterService = fighterService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var fighters = await _fighterService.GetAllFighterAsync();
            return Ok(fighters);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (id <= 0)
                return BadRequest("Id inválido");

            var fighter = await _fighterService.GetFighterByIdAsync(id);
            if (fighter == null)
                return NotFound();

            return Ok(fighter);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Fighter fighter)
        {
            await _fighterService.AddFighterAsync(fighter);
            return CreatedAtAction(nameof(Get), new { id = fighter.id }, fighter);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Fighter fighter)
        {
            if (id <= 0)
                return BadRequest("Id inválido");

            if (id != fighter.id)
                return BadRequest();

            await _fighterService.UpdateFighterAsync(fighter);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Id inválido");

            await _fighterService.DeleteFighterAsync(id);
            return NoContent();
        }
    }
}




