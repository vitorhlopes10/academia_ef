using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IFuncionarioRepository
    {
        Funcionario Buscar(int id);
        List<Funcionario> BuscarTodos();
        Funcionario Inserir(Funcionario aluno);
        Funcionario Atualizar(Funcionario aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
