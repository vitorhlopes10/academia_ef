using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class StatusMensalidadeService : IStatusMensalidadeService
    {
        private readonly IStatusMensalidadeRepository _statusMensalidadeRepository;

        public StatusMensalidadeService(IStatusMensalidadeRepository statusMensalidadeRepository)
        {
            _statusMensalidadeRepository = statusMensalidadeRepository;
        }

        public StatusMensalidade Buscar(int id)
        {
            return _statusMensalidadeRepository.Buscar(id);
        }

        public List<StatusMensalidade> BuscarTodos()
        {
            return _statusMensalidadeRepository.BuscarTodos();
        }
    }
}
