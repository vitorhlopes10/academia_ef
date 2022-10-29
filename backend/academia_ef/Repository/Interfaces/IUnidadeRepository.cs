using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IUnidadeRepository
    {
        Unidade Buscar(int id);
        List<Unidade> BuscarTodos();
    }
}
