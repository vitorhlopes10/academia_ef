using academia_ef.Model;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Funcionario;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionariosController : ControllerBase
    {
        private readonly IFuncionarioService _funcionarioService;

        public FuncionariosController(IFuncionarioService funcionarioService)
        {
            _funcionarioService = funcionarioService;
        }

        [HttpGet("{id}")]
        public ActionResult<Funcionario> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _funcionarioService.Buscar(id);

            return resultado is null ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<Funcionario>> BuscarTodos()
        {
            var resultado = _funcionarioService.BuscarTodos();
            return resultado is null || !(resultado.Any()) ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpGet("Filtro")]
        public ActionResult<List<Funcionario>> Filtro([FromQuery] FuncionarioFiltroViewModel filtro)
        {
            var resultado = _funcionarioService.Filtrar(filtro);
            return resultado is null || !(resultado.Any()) ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Funcionario> Inserir(FuncionarioViewModel funcionario)
        {
            var resultado = _funcionarioService.Inserir(funcionario);
            return resultado is null ? NotFound("N�o foi poss�vel realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<Funcionario> Atualizar(FuncionarioViewModel funcionario)
        {
            var resultado = _funcionarioService.Atualizar(funcionario);
            return resultado is null ? NotFound("N�o foi poss�vel atualizar o cadastro!") : Ok(resultado);
        }

        [HttpPost("Inativar/{id}")]
        public ActionResult Inativar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _funcionarioService.Inativar(id);

            return resultado ? NoContent() : NotFound("N�o foi poss�vel inativar o Funcion�rio!");
        }

        [HttpPost("Ativar/{id}")]
        public ActionResult Ativar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _funcionarioService.Ativar(id);

            return resultado ? NoContent() : NotFound("N�o foi poss�vel reativar o Funcion�rio!");
        }
    }
}