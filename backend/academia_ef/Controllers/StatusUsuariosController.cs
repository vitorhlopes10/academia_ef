using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StatusUsuariosController : ControllerBase
    {
        private readonly IStatusUsuarioService _statusUsuarioService;

        public StatusUsuariosController(IStatusUsuarioService statusUsuarioService)
        {
            _statusUsuarioService = statusUsuarioService;
        }

        [HttpGet("{id}")]
        public ActionResult<StatusUsuario> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _statusUsuarioService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<StatusUsuario>> BuscarTodos()
        {
            var resultado = _statusUsuarioService.BuscarTodos();
            return resultado is null || !(resultado.Any()) ? NotFound("Não Encontrado!") : Ok(resultado);
        }
    }
}