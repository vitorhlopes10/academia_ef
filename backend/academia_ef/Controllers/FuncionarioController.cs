using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {
        private readonly IFuncionarioService _funcionarioService;

        public FuncionarioController(IFuncionarioService funcionarioService)
        {
            _funcionarioService = funcionarioService;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Funcionario> Buscar(int id)
        {
            return _funcionarioService.Buscar(id);
        }

        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<List<Funcionario>> BuscarTodos()
        {
            return _funcionarioService.BuscarTodos();
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Funcionario> Inserir(Funcionario funcionario)
        {
            return _funcionarioService.Inserir(funcionario);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Funcionario> Atualizar(Funcionario funcionario)
        {
            return _funcionarioService.Atualizar(funcionario);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<bool> Inativar(int id)
        {
            return _funcionarioService.Inativar(id);
        }
    }
}