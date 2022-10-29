using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IAlunoService
    {
        Aluno Buscar(int id);
        List<Aluno> BuscarTodos();
        Aluno Inserir(Aluno aluno);
        Aluno Atualizar(Aluno aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
