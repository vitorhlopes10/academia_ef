using academia_ef.Model;
using academia_ef.ViewModel.Aluno;
using academia_ef.ViewModel.Funcionario;

namespace academia_ef.Services.Interfaces
{
    public interface IFuncionarioService
    {
        Funcionario Buscar(int id);
        List<Funcionario> BuscarTodos();
        List<Funcionario> Filtrar(FuncionarioFiltroViewModel filtro);
        Funcionario Inserir(FuncionarioViewModel aluno);
        Funcionario Atualizar(FuncionarioViewModel aluno);
        bool Inativar(int id);
        bool Ativar(int id);
    }
}
