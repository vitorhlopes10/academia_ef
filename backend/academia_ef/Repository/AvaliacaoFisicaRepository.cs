using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class AvaliacaoFisicaRepository : IAvaliacaoFisicaRepository
    {
        private readonly AcademiaEfContext _context;

        public AvaliacaoFisicaRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public AvaliacaoFisica Buscar(int id)
        {
            var obj = _context.Find<AvaliacaoFisica>(id);
            return obj;
        }

        public IQueryable<AvaliacaoFisica> BuscarTodos()
        {
            var obj = _context.AvaliacaoFisica.AsQueryable();
            return obj;
        }

        public AvaliacaoFisica Inserir(AvaliacaoFisica avaliacaoFisica)
        {
            var obj = _context.Add(avaliacaoFisica);
            _context.SaveChanges();
            return obj.Entity;
        }

        public AvaliacaoFisica Atualizar(AvaliacaoFisica avaliacaoFisica)
        {
            var obj = _context.Update(avaliacaoFisica);
            _context.SaveChanges();
            return obj.Entity;
        }

        public bool Deletar(int id)
        {
            var obj = _context.Find<AvaliacaoFisica>(id);

            if (obj != null)
            {
                _context.Remove(obj);
                _context.SaveChanges();
            }

            return obj != null;
        }
    }
}
