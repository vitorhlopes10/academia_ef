using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class BiotipoRepository : IBiotipoRepository
    {
        private readonly AcademiaEfContext _context;

        public BiotipoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Biotipo Buscar(int id)
        {
            var obj = _context.Find<Biotipo>(id);
            return obj;
        }

        public List<Biotipo> BuscarTodos()
        {
            var obj = _context.Biotipo.ToList();
            return obj;
        }
    }
}
