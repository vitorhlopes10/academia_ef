using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Treino;

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

        public List<Treino> Filtrar(TreinoFiltroViewModel filtro)
        {
            var result = _treinoRepository.BuscarTodos();

            if (result is null)
            {
                return null;
            }

            if (filtro.NomeAluno != null && filtro.NomeAluno != String.Empty)
            {
                result = result.Where(x => x.Aluno.Nome.Equals(filtro.NomeAluno));
            }

            if (filtro.DataInicial != null)
            {
                result = result.Where(x => x.DataCriacao > filtro.DataInicial);
            }

            if (filtro.DataInicial != null)
            {
                result = result.Where(x => x.DataCriacao < filtro.DataFinal);
            }

            return result.ToList();

        }

        public List<Treino> BuscarTodos()
        {
            return _treinoRepository.BuscarTodos().OrderByDescending(x => x.Id).ToList();
        }

        public Treino Inserir(TreinoViewModel novoTreino)
        {
            var obj = new Treino();

            obj.Descricao = novoTreino.Descricao;
            obj.DataCriacao = DateTime.Now;

            obj.IdAluno = novoTreino.IdAluno;
            obj.IdFuncionario = novoTreino.IdFuncionario;

            var retorno = _treinoRepository.Inserir(obj);

            return retorno;
        }

        public Treino Atualizar(TreinoViewModel treino)
        {
            var obj = _treinoRepository.Buscar(treino.Id);

            obj.Id = treino.Id;
            obj.Descricao = treino.Descricao;
            obj.DataCriacao = DateTime.Now;

            obj.IdAluno = treino.IdAluno;
            obj.IdFuncionario = treino.IdFuncionario;

            var retorno = _treinoRepository.Atualizar(obj);

            return retorno;
        }

        public bool Deletar(int id)
        {
            var deletado = _treinoRepository.Deletar(id);
            return deletado;
        }
    }
}
