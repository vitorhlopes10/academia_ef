using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IUsuarioService
    {
        Usuario Login(string nome, string senha);
    }
}
