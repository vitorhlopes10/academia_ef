using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TreinosController : ControllerBase
    {
        private readonly ITreinoService _treinoService;

        public TreinosController(ITreinoService treinoService)
        {
            _treinoService = treinoService;
        }

        [HttpGet("{id}")]
        public ActionResult<Treino> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _treinoService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet("{idAluno}")]
        public ActionResult<List<Treino>> BuscarTodosPorAluno(int idAluno)
        {
            if (!(idAluno > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _treinoService.BuscarTodosPorAluno(idAluno);

            return resultado is null || !(resultado.Any()) ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Treino> Inserir(Treino treino)
        {
            var resultado = _treinoService.Inserir(treino);
            return resultado is null ? NotFound("Não foi possível realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<Treino> Atualizar(Treino treino)
        {
            var resultado = _treinoService.Atualizar(treino);
            return resultado is null ? NotFound("Não foi possível atualizar o cadastro!") : Ok(resultado);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Deletar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _treinoService.Deletar(id);

            return resultado ? NoContent() : NotFound("Não foi possível realizar a deleção!");
        }
    }
}