using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IUnidadeService
    {
        Unidade Buscar(int id);
        List<Unidade> BuscarTodos();
    }
}
