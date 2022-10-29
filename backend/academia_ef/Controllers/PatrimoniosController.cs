using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PatrimoniosController : ControllerBase
    {
        private readonly IPatrimonioService _patrimonioService;

        public PatrimoniosController(IPatrimonioService patrimonioService)
        {
            _patrimonioService = patrimonioService;
        }

        [HttpGet("{id}")]
        public ActionResult<Patrimonio> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _patrimonioService.Buscar(id);

            return resultado is null ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<Patrimonio>> BuscarTodos()
        {
            var resultado = _patrimonioService.BuscarTodos();
            return resultado is null || !(resultado.Any()) ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Patrimonio> Inserir(Patrimonio patrimonio)
        {
            var resultado = _patrimonioService.Inserir(patrimonio);
            return resultado is null ? NotFound("N�o foi poss�vel realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<Patrimonio> Atualizar(Patrimonio patrimonio)
        {
            var resultado = _patrimonioService.Atualizar(patrimonio);
            return resultado is null ? NotFound("N�o foi poss�vel atualizar o cadastro!") : Ok(resultado);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Deletar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _patrimonioService.Deletar(id);

            return resultado ? NoContent() : NotFound("N�o foi poss�vel realizar a dele��o!");
        }
    }
}