using academia_ef.Model;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Pagamento;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PagamentosMensalidadesController : ControllerBase
    {
        private readonly IPagamentoMensalidadeService _pagamentoMensalidadeService;

        public PagamentosMensalidadesController(IPagamentoMensalidadeService pagamentoMensalidadeService)
        {
            _pagamentoMensalidadeService = pagamentoMensalidadeService;
        }

        [HttpGet("{id}")]
        public ActionResult<PagamentoMensalidade> Buscar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _pagamentoMensalidadeService.Buscar(id);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpGet("PorAluno/{idAluno}")]
        public ActionResult<List<PagamentoMensalidade>> BuscarTodosPorAluno(int idAluno)
        {
            if (!(idAluno > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _pagamentoMensalidadeService.BuscarTodosPorAluno(idAluno);

            return resultado is null ? NotFound("Não Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<PagamentoMensalidade> RegistrarPagamento(PagamentoViewModel novoPagamento)
        {
            var resultado = _pagamentoMensalidadeService.RegistrarPagamento(novoPagamento);
            return resultado is null ? NotFound("Não foi possível realizar o cadastro!") : resultado;
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Deletar(int id)
        {
            if (!(id > 0))
                return BadRequest("É necessário informar um ID maior que 0!");

            var resultado = _pagamentoMensalidadeService.Deletar(id);

            return resultado ? NoContent() : NotFound("Não foi possível realizar a deleção!");
        }
    }
}