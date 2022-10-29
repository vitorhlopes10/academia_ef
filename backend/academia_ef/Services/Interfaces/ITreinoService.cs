using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface ITreinoService
    {
        Treino Buscar(int id);
        List<Treino> BuscarTodosPorAluno(int idAluno);
        Treino Inserir(Treino treino);
        Treino Atualizar(Treino treino);
        bool Deletar(int id);
    }
}
