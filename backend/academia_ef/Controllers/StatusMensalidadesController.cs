using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StatusMensalidadesController : ControllerBase
    {
        private readonly IStatusMensalidadeService _statusMensalidadeService;

        public StatusMensalidadesController(IStatusMensalidadeService statusMensalidadeService)
        {
            _statusMensalidadeService = statusMensalidadeService;
        }

        [HttpGet("{id}")]
        public ActionResult<StatusMensalidade> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _statusMensalidadeService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet()]
        public ActionResult<List<StatusMensalidade>> BuscarTodos()
        {
            var resultado = _statusMensalidadeService.BuscarTodos();
            return resultado is null || !(resultado.Any()) ? NotFound("Não Encontrado!") : Ok(resultado);
        }
    }
}