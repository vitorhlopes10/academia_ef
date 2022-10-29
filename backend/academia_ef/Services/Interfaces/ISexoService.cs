using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface ISexoService
    {
        Sexo Buscar(int id);
        List<Sexo> BuscarTodos();
    }
}
