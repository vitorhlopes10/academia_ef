using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IStatusUsuarioService
    {
        StatusUsuario Buscar(int id);
        List<StatusUsuario> BuscarTodos();
    }
}
