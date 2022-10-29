using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface ITreinoRepository
    {
        Treino Buscar(int id);
        List<Treino> BuscarTodosPorAluno(int idAluno);
        Treino Inserir(Treino treino);
        Treino Atualizar(Treino treino);
        bool Deletar(int id);
    }
}
