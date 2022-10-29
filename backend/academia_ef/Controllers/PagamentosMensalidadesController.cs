using academia_ef.Model;
using academia_ef.Services.Interfaces;
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
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _pagamentoMensalidadeService.Buscar(id);

            return resultado is null ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpGet("{idAluno}")]
        public ActionResult<List<PagamentoMensalidade>> BuscarTodosPorAluno(int idAluno)
        {
            if (!(idAluno > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _pagamentoMensalidadeService.BuscarTodosPorAluno(idAluno);

            return resultado is null || !(resultado.Any()) ? NotFound("N�o Encontrado!") : Ok(resultado);
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<PagamentoMensalidade> Inserir(PagamentoMensalidade pagamentoMensalidade)
        {
            var resultado = _pagamentoMensalidadeService.Inserir(pagamentoMensalidade);
            return resultado is null ? NotFound("N�o foi poss�vel realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<PagamentoMensalidade> Atualizar(PagamentoMensalidade pagamentoMensalidade)
        {
            var resultado = _pagamentoMensalidadeService.Atualizar(pagamentoMensalidade);
            return resultado is null ? NotFound("N�o foi poss�vel atualizar o cadastro!") : Ok(resultado);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Deletar(int id)
        {
            if (!(id > 0))
                return BadRequest("� necess�rio informar um ID maior que 0!");

            var resultado = _pagamentoMensalidadeService.Deletar(id);

            return resultado ? NoContent() : NotFound("N�o foi poss�vel realizar a dele��o!");
        }
    }
}