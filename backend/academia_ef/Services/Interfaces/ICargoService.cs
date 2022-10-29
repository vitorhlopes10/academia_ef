using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface ICargoService
    {
        Cargo Buscar(int id);
        List<Cargo> BuscarTodos();
    }
}
