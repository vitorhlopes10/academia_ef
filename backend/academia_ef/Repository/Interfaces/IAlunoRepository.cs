using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IAlunoRepository
    {
        Aluno Buscar(int id);
        List<Aluno> BuscarTodos();
        Aluno Inserir(Aluno aluno);
        Aluno Atualizar(Aluno aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
