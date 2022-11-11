using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface ITreinoRepository
    {
        Treino Buscar(int id);
        IQueryable<Treino> BuscarTodos();
        IQueryable<Treino> BuscarTodosPorAluno(int id);
        Treino Inserir(Treino treino);
        Treino Atualizar(Treino treino);
        bool Deletar(int id);
    }
}
