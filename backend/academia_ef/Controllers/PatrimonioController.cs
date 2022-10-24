using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PatrimonioController : ControllerBase
    {
        private readonly IPatrimonioService _patrimonioService;

        public PatrimonioController(IPatrimonioService patrimonioService)
        {
            _patrimonioService = patrimonioService;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Patrimonio> Buscar(int id)
        {
            return _patrimonioService.Buscar(id);
        }

        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<List<Patrimonio>> BuscarTodos()
        {
            return _patrimonioService.BuscarTodos();
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Patrimonio> Inserir(Patrimonio patrimonio)
        {
            return _patrimonioService.Inserir(patrimonio);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Patrimonio> Atualizar(Patrimonio patrimonio)
        {
            return _patrimonioService.Atualizar(patrimonio);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<bool> Deletar(int id)
        {
            return _patrimonioService.Deletar(id);
        }
    }
}