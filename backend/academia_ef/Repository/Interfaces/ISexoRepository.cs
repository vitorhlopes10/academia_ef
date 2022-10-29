using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface ISexoRepository
    {
        Sexo Buscar(int id);
        List<Sexo> BuscarTodos();
    }
}
