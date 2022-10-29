using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IBiotipoRepository
    {
        Biotipo Buscar(int id);
        List<Biotipo> BuscarTodos();
    }
}
