using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IStatusMensalidadeService
    {
        StatusMensalidade Buscar(int id);
        List<StatusMensalidade> BuscarTodos();
    }
}
