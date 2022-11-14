using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IUsuarioRepository
    {
        Usuario Login(string nome, string senha);
    }
}
