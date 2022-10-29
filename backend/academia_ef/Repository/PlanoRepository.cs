using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class PlanoRepository : IPlanoRepository
    {
        private readonly AcademiaEfContext _context;

        public PlanoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Plano Buscar(int id)
        {
            var obj = _context.Find<Plano>(id);
            return obj;
        }

        public List<Plano> BuscarTodos()
        {
            var obj = _context.Plano.ToList();
            return obj;
        }
    }
}
