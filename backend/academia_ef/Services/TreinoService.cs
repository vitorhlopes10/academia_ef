using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class TreinoService : ITreinoService
    {
        private readonly ITreinoRepository _treinoRepository;

        public TreinoService(ITreinoRepository treinoRepository)
        {
            _treinoRepository = treinoRepository;
        }

        public Treino Buscar(int id)
        {
            return _treinoRepository.Buscar(id);
        }

        public List<Treino> BuscarTodosPorAluno(int idAluno)
        {
            return _treinoRepository.BuscarTodosPorAluno(idAluno);
        }

        public Treino Inserir(Treino treino)
        {
            var obj = _treinoRepository.Inserir(treino);
            return obj;
        }

        public Treino Atualizar(Treino treino)
        {
            var obj = _treinoRepository.Atualizar(treino);
            return obj;
        }

        public bool Deletar(int id)
        {
            var deletado = _treinoRepository.Deletar(id);
            return deletado;
        }
    }
}
