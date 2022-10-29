using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class PlanoService : IPlanoService
    {
        private readonly IPlanoRepository _planoRepository;

        public PlanoService(IPlanoRepository planoRepository)
        {
            _planoRepository = planoRepository;
        }

        public Plano Buscar(int id)
        {
            return _planoRepository.Buscar(id);
        }

        public List<Plano> BuscarTodos()
        {
            return _planoRepository.BuscarTodos();
        }
    }
}
