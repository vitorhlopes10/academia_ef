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

            if (!string.IsNullOrEmpty(filtro.NomeAluno))
            {
                result = result.Where(x => x.Aluno.Nome.Equals(filtro.NomeAluno));
            }

            if (filtro.idAluno != null && filtro.idAluno > 0)
            {
                result = result.Where(x => x.Aluno.Nome.Equals(filtro.NomeAluno));
            }

            if (!string.IsNullOrEmpty(filtro.DataInicial))
            {
                var dataInicial = DateTime.Parse(filtro.DataInicial);
                result = result.Where(x => x.DataCriacao > dataInicial);
            }

            if (!string.IsNullOrEmpty(filtro.DataFinal))
            {
                var dataFinal = DateTime.Parse(filtro.DataFinal);
                result = result.Where(x => x.DataCriacao < dataFinal);
            }

            return result.ToList();
        }


        public List<Treino> BuscarTodosPorAluno(int idAluno)
        {
            return _treinoRepository.BuscarTodosPorAluno(idAluno).OrderByDescending(x => x.Id).ToList();
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
