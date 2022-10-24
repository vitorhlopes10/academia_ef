using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IPatrimonioRepository
    {
        Patrimonio Buscar(int id);
        List<Patrimonio> BuscarTodos();
        Patrimonio Inserir(Patrimonio aluno);
        Patrimonio Atualizar(Patrimonio aluno);
        bool Deletar(int id);
    }
}
