using academia_ef.Model;
using academia_ef.Services;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.AvaliacaoFisica;
using academia_ef.ViewModel.Treino;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AvaliacoesFisicaController : ControllerBase
    {
        private readonly IAvaliacaoFisicaService _avaliacaoFisicaService;

        public AvaliacoesFisicaController(IAvaliacaoFisicaService avaliacaoFisicaService)
        {
            _avaliacaoFisicaService = avaliacaoFisicaService;
        }

        [HttpGet("{id}")]
        public ActionResult<AvaliacaoFisica> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _avaliacaoFisicaService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet("Filtro")]
        public ActionResult<List<AvaliacaoFisica>> Filtro([FromQuery] AvaliacaoFisicaFiltroViewModel filtro)
        {
            var resultado = _avaliacaoFisicaService.Filtrar(filtro);
            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<AvaliacaoFisica>> BuscarTodos()
        {
            var resultado = _avaliacaoFisicaService.BuscarTodos();
            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<AvaliacaoFisica> Inserir(AvaliacaoFisicaViewModel avaliacaoFisica)
        {
            var resultado = _avaliacaoFisicaService.Inserir(avaliacaoFisica);
            return resultado is null ? NotFound("Não foi possível realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<AvaliacaoFisica> Atualizar(AvaliacaoFisicaViewModel avaliacaoFisica)
        {
            var resultado = _avaliacaoFisicaService.Atualizar(avaliacaoFisica);
            return resultado is null ? NotFound("Não foi possível atualizar o cadastro!") : Ok(resultado);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Deletar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _avaliacaoFisicaService.Deletar(id);

            return resultado ? NoContent() : NotFound("Não foi possível realizar a deleção!");
        }
    }
}