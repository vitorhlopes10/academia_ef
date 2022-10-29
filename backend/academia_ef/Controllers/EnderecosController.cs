using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnderecosController : ControllerBase
    {
        private readonly IEnderecoService _enderecoService;

        public EnderecosController(IEnderecoService enderecoService)
        {
            _enderecoService = enderecoService;
        }

        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Endereco> Inserir(Endereco endereco)
        {
            var resultado = _enderecoService.Inserir(endereco);
            return resultado is null ? NotFound("N�o foi poss�vel realizar o cadastro!") : resultado;
        }

        [HttpPut()]
        public ActionResult<Endereco> Atualizar(Endereco endereco)
        {
            var resultado = _enderecoService.Atualizar(endereco);
            return resultado is null ? NotFound("N�o foi poss�vel atualizar o cadastro!") : Ok(resultado);
        }
    }
}