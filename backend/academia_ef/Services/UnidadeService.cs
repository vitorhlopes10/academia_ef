using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class UnidadeService : IUnidadeService
    {
        private readonly IUnidadeRepository _unidadeRepository;

        public UnidadeService(IUnidadeRepository unidadeRepository)
        {
            _unidadeRepository = unidadeRepository;
        }

        public Unidade Buscar(int id)
        {
            return _unidadeRepository.Buscar(id);
        }

        public List<Unidade> BuscarTodos()
        {
            return _unidadeRepository.BuscarTodos();
        }
    }
}
