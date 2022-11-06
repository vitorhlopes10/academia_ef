using academia_ef.Model;
using academia_ef.ViewModel.Aluno;

namespace academia_ef.Repository.Interfaces
{
    public interface IAlunoRepository
    {
        Aluno Buscar(int id);
        IQueryable<Aluno> BuscarTodos();
        Aluno Inserir(Aluno aluno);
        Aluno Atualizar(Aluno aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
