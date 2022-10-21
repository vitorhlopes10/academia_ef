using academia_ef.Model;
using Microsoft.AspNetCore.Mvc;

namespace academia_ef.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<AlunoController> _logger;

        public AlunoController(ILogger<AlunoController> logger)
        {
            _logger = logger;
        }
    }
}