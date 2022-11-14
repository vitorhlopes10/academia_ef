using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly AcademiaEfContext _context;

        public UsuarioRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Usuario Login(string login, string senha)
        {
            var usuario = _context.Usuario
                .Where(x => x.Login.Equals(login) && x.Senha.Equals(senha))
                .FirstOrDefault();

            return usuario;
        }
    }
}
