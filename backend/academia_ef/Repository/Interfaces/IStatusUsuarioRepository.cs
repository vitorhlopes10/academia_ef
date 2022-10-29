using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IStatusUsuarioRepository
    {
        StatusUsuario Buscar(int id);
        List<StatusUsuario> BuscarTodos();
    }
}
