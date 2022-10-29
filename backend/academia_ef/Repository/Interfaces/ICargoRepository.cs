using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface ICargoRepository
    {
        Cargo Buscar(int id);
        List<Cargo> BuscarTodos();
    }
}
