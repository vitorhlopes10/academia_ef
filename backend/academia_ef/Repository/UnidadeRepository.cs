using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class UnidadeRepository : IUnidadeRepository
    {
        private readonly AcademiaEfContext _context;

        public UnidadeRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Unidade Buscar(int id)
        {
            var obj = _context.Find<Unidade>(id);
            return obj;
        }

        public List<Unidade> BuscarTodos()
        {
            var obj = _context.Unidade.ToList();
            return obj;
        }
    }
}
