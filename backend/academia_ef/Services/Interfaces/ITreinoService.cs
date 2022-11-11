using academia_ef.Model;
using academia_ef.ViewModel.Treino;

namespace academia_ef.Services.Interfaces
{
    public interface ITreinoService
    {
        Treino Buscar(int id);
        List<Treino> Filtrar(TreinoFiltroViewModel filtro);
        List<Treino> BuscarTodosPorAluno(int idAluno);
        List<Treino> BuscarTodos();
        Treino Inserir(TreinoViewModel treino);
        Treino Atualizar(TreinoViewModel treino);
        bool Deletar(int id);
    }
}
