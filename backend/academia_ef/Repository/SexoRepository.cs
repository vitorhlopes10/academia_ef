using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class SexoRepository : ISexoRepository
    {
        private readonly AcademiaEfContext _context;

        public SexoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Sexo Buscar(int id)
        {
            var obj = _context.Find<Sexo>(id);
            return obj;
        }

        public List<Sexo> BuscarTodos()
        {
            var obj = _context.Sexo.ToList();
            return obj;
        }
    }
}
