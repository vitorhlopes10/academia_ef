using academia_ef.Model;
using academia_ef.Services;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Aluno;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunosController : ControllerBase
    {
        private readonly IAlunoService _alunoService;

        public AlunosController(IAlunoService alunoService)
        {
            _alunoService = alunoService;
        }

        [HttpGet("{id}")]
        public ActionResult<Aluno> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _alunoService.Buscar(id);

            return resultado is null ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<Aluno>> BuscarTodos()
        {
            var resultado = _alunoService.BuscarTodos();
            return resultado is null ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpGet("Filtro")]
        public ActionResult<List<Aluno>> Filtro([FromQuery] AlunoFiltroViewModel filtro)
        {
            var resultado = _alunoService.Filtrar(filtro);
            return resultado is null ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Aluno> Inserir(AlunoViewModel aluno)
        {
            var resultado = _alunoService.Inserir(aluno);
            return resultado is null ? NotFound("N�o foi poss�vel realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<Aluno> Atualizar(AlunoViewModel aluno)
        {
            var resultado = _alunoService.Atualizar(aluno);
            return resultado is null ? NotFound("N�o foi poss�vel atualizar o cadastro!") : Ok(resultado);
        }

        [HttpPost("Inativar/{id}")]
        public ActionResult Inativar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _alunoService.Inativar(id);

            return resultado ? NoContent() : NotFound("N�o foi poss�vel inativar o Aluno!");
        }

        [HttpPost("Ativar/{id}")]
        public ActionResult Ativar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _alunoService.Ativar(id);

            return resultado ? NoContent() : NotFound("N�o foi poss�vel reativar o Aluno!");
        }
    }
}