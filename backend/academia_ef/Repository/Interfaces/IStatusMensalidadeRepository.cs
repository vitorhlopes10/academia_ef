using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IStatusMensalidadeRepository
    {
        StatusMensalidade Buscar(int id);
        List<StatusMensalidade> BuscarTodos();
    }
}
