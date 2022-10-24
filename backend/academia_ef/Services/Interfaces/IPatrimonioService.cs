using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IPatrimonioService
    {
        Patrimonio Buscar(int id);
        List<Patrimonio> BuscarTodos();
        Patrimonio Inserir(Patrimonio aluno);
        Patrimonio Atualizar(Patrimonio aluno);
        bool Deletar(int id);
    }
}
