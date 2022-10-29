using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class StatusUsuarioRepository : IStatusUsuarioRepository
    {
        private readonly AcademiaEfContext _context;

        public StatusUsuarioRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public StatusUsuario Buscar(int id)
        {
            var obj = _context.Find<StatusUsuario>(id);
            return obj;
        }

        public List<StatusUsuario> BuscarTodos()
        {
            var obj = _context.StatusUsuario.ToList();
            return obj;
        }
    }
}
