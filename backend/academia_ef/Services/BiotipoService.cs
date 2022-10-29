using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class BiotipoService : IBiotipoService
    {
        private readonly IBiotipoRepository _biotipoRepository;

        public BiotipoService(IBiotipoRepository biotipoRepository)
        {
            _biotipoRepository = biotipoRepository;
        }

        public Biotipo Buscar(int id)
        {
            return _biotipoRepository.Buscar(id);
        }

        public List<Biotipo> BuscarTodos()
        {
            return _biotipoRepository.BuscarTodos();
        }
    }
}
