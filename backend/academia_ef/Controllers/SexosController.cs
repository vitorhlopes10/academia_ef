using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SexosController : ControllerBase
    {
        private readonly ISexoService _sexoService;

        public SexosController(ISexoService sexoService)
        {
            _sexoService = sexoService;
        }

        [HttpGet("{id}")]
        public ActionResult<Sexo> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _sexoService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<Sexo>> BuscarTodos()
        {
            var resultado = _sexoService.BuscarTodos();
            return resultado is null || !(resultado.Any()) ? NotFound("Não Encontrado!") : Ok(resultado);
        }
    }
}