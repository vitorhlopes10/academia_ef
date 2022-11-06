using academia_ef.Model;
using academia_ef.ViewModel.Aluno;
using academia_ef.ViewModel.Funcionario;

namespace academia_ef.Repository.Interfaces
{
    public interface IFuncionarioRepository
    {
        Funcionario Buscar(int id);
        IQueryable<Funcionario> BuscarTodos();
        Funcionario Inserir(Funcionario aluno);
        Funcionario Atualizar(Funcionario aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
