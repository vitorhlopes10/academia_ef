using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class AvaliacaoFisicaService : IAvaliacaoFisicaService
    {
        private readonly IAvaliacaoFisicaRepository _avaliacaoFisicaRepository;

        public AvaliacaoFisicaService(IAvaliacaoFisicaRepository avaliacaoFisicaRepository)
        {
            _avaliacaoFisicaRepository = avaliacaoFisicaRepository;
        }

        public AvaliacaoFisica Buscar(int id)
        {
            return _avaliacaoFisicaRepository.Buscar(id);
        }

        public List<AvaliacaoFisica> BuscarTodos()
        {
            return _avaliacaoFisicaRepository.BuscarTodos().OrderByDescending(x => x.Id).ToList();
        }

        public AvaliacaoFisica Inserir(AvaliacaoFisica avaliacaoFisica)
        {
            var obj = _avaliacaoFisicaRepository.Inserir(avaliacaoFisica);
            return obj;
        }

        public AvaliacaoFisica Atualizar(AvaliacaoFisica avaliacaoFisica)
        {
            var obj = _avaliacaoFisicaRepository.Atualizar(avaliacaoFisica);
            return obj;
        }

        public bool Deletar(int id)
        {
            var deletado = _avaliacaoFisicaRepository.Deletar(id);
            return deletado;
        }
    }
}
