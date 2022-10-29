using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class TreinoRepository : ITreinoRepository
    {
        private readonly AcademiaEfContext _context;

        public TreinoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Treino Buscar(int id)
        {
            var obj = _context.Find<Treino>(id);
            return obj;
        }

        public List<Treino> BuscarTodosPorAluno(int idAluno)
        {
            var obj = _context.Treino.Where(x => x.IdAluno == idAluno).ToList();
            return obj;
        }

        public Treino Inserir(Treino treino)
        {
            var obj = _context.Add(treino);
            _context.SaveChanges();
            return obj.Entity;
        }

        public Treino Atualizar(Treino treino)
        {
            var obj = _context.Update(treino);
            _context.SaveChanges();
            return obj.Entity;
        }

        public bool Deletar(int id)
        {
            var obj = _context.Find<Treino>(id);

            if (obj != null)
            {
                _context.Remove(obj);
                _context.SaveChanges();
            }

            return obj != null;
        }
    }
}
