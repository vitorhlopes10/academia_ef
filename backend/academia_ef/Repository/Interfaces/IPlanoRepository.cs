using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IPlanoRepository
    {
        Plano Buscar(int id);
        List<Plano> BuscarTodos();
    }
}
