using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class StatusUsuarioService : IStatusUsuarioService
    {
        private readonly IStatusUsuarioRepository _statusUsuarioRepository;

        public StatusUsuarioService(IStatusUsuarioRepository statusUsuarioRepository)
        {
            _statusUsuarioRepository = statusUsuarioRepository;
        }

        public StatusUsuario Buscar(int id)
        {
            return _statusUsuarioRepository.Buscar(id);
        }

        public List<StatusUsuario> BuscarTodos()
        {
            return _statusUsuarioRepository.BuscarTodos();
        }
    }
}
