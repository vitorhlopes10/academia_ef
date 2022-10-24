using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IFuncionarioService
    {
        Funcionario Buscar(int id);
        List<Funcionario> BuscarTodos();
        Funcionario Inserir(Funcionario aluno);
        Funcionario Atualizar(Funcionario aluno);
        bool Inativar(int id);
    }
}
