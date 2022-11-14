using academia_ef.Model;
using academia_ef.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        public readonly IUsuarioService _usuarioService;

        public UsuariosController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet("Login/{login}/{senha}")]
        public ActionResult<Usuario> Login(string login, string senha)
        {
            if (string.IsNullOrEmpty(login) || string.IsNullOrEmpty(senha))
                return BadRequest("É necessário informar o login e senha!");

            var usuario = _usuarioService.Login(login, senha);

            return usuario is not null ? Ok(usuario) : NotFound("Login ou senha incorreto!!");
        }
    }
}
