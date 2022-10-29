using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class SexoService : ISexoService
    {
        private readonly ISexoRepository _sexoRepository;

        public SexoService(ISexoRepository sexoRepository)
        {
            _sexoRepository = sexoRepository;
        }

        public Sexo Buscar(int id)
        {
            return _sexoRepository.Buscar(id);
        }

        public List<Sexo> BuscarTodos()
        {
            return _sexoRepository.BuscarTodos();
        }
    }
}
