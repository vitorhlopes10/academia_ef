using academia_ef.Model;
using academia_ef.ViewModel.Aluno;

namespace academia_ef.Services.Interfaces
{
    public interface IAlunoService
    {
        Aluno Buscar(int id);
        List<Aluno> BuscarTodos();
        List<Aluno> Filtrar(AlunoFiltroViewModel filtro);
        Aluno Inserir(AlunoViewModel aluno);
        Aluno Atualizar(AlunoViewModel aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
