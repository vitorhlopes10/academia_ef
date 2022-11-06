using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class PatrimonioRepository : IPatrimonioRepository
    {
        private readonly AcademiaEfContext _context;

        public PatrimonioRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Patrimonio Buscar(int id)
        {
            var obj = _context.Find<Patrimonio>(id);
            return obj;
        }

        public List<Patrimonio> BuscarTodos()
        {
            var obj = _context.Patrimonio.ToList();
            return obj;
        }

        public List<Patrimonio> Filtrar(string nome)
        {
            var obj = _context.Patrimonio.Where(x => x.Nome.Equals(nome)).ToList();
            return obj;
        }

        public Patrimonio Inserir(Patrimonio item)
        {
            var obj = _context.Add(item);
            _context.SaveChanges();
            return obj.Entity;
        }

        public Patrimonio Atualizar(Patrimonio item)
        {
            var obj = _context.Update(item);
            _context.SaveChanges();
            return obj.Entity;
        }

        public bool Deletar(int id)
        {
            var obj = _context.Find<Patrimonio>(id);

            if (obj != null)
            {
                _context.Remove(obj);
                _context.SaveChanges();
            }

            return obj != null;
        }
    }
}
