using academia_ef.Model;
using academia_ef.ViewModel.Patrimonio;

namespace academia_ef.Services.Interfaces
{
    public interface IPatrimonioService
    {
        Patrimonio Buscar(int id);
        List<Patrimonio> BuscarTodos();
        List<Patrimonio> Filtrar(string nome);
        Patrimonio Inserir(PatrimonioViewModel aluno);
        Patrimonio Atualizar(PatrimonioViewModel aluno);
        bool Deletar(int id);
    }
}
