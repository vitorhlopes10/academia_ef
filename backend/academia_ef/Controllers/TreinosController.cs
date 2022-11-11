using academia_ef.Model;
using academia_ef.Services;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Aluno;
using academia_ef.ViewModel.Treino;
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

        [HttpGet("Filtro")]
        public ActionResult<List<Treino>> Filtro([FromQuery] TreinoFiltroViewModel filtro)
        {
            var resultado = _treinoService.Filtrar(filtro);
            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet("PorAluno/{idAluno}")]
        public ActionResult<List<PagamentoMensalidade>> BuscarTodosPorAluno(int idAluno)
        {
            if (!(idAluno > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _treinoService.BuscarTodosPorAluno(idAluno);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<Treino>> BuscarTodos()
        {
            var resultado = _treinoService.BuscarTodos();
            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Treino> Inserir(TreinoViewModel treino)
        {
            var resultado = _treinoService.Inserir(treino);
            return resultado is null ? NotFound("Não foi possível realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<Treino> Atualizar(TreinoViewModel treino)
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