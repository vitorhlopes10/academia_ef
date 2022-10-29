using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IBiotipoService
    {
        Biotipo Buscar(int id);
        List<Biotipo> BuscarTodos();
    }
}
