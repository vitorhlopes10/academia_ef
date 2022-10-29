using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class CargoRepository : ICargoRepository
    {
        private readonly AcademiaEfContext _context;

        public CargoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Cargo Buscar(int id)
        {
            var obj = _context.Find<Cargo>(id);
            return obj;
        }

        public List<Cargo> BuscarTodos()
        {
            var obj = _context.Cargo.ToList();
            return obj;
        }
    }
}
