using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IPlanoService
    {
        Plano Buscar(int id);
        List<Plano> BuscarTodos();
    }
}
