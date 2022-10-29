using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BiotiposController : ControllerBase
    {
        private readonly IBiotipoService _biotipoService;

        public BiotiposController(IBiotipoService biotipoService)
        {
            _biotipoService = biotipoService;
        }

        [HttpGet("{id}")]
        public ActionResult<Biotipo> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _biotipoService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<Biotipo>> BuscarTodos()
        {
            var resultado = _biotipoService.BuscarTodos();
            return resultado is null || !(resultado.Any()) ? NotFound("Não Encontrado!") : Ok(resultado);
        }
    }
}