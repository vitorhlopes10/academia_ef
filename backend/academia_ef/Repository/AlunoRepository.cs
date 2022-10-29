using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class AlunoRepository : IAlunoRepository
    {
        private readonly AcademiaEfContext _context;

        public AlunoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Aluno Buscar(int id)
        {
            var obj = _context.Find<Aluno>(typeof(Aluno), id);
            return obj;
        }

        public List<Aluno> BuscarTodos()
        {
            var obj = _context.Aluno.ToList();
            return obj;
        }

        public Aluno Inserir(Aluno aluno)
        {
            var obj = _context.Add(aluno);
            _context.SaveChanges();
            return obj.Entity;
        }

        public Aluno Atualizar(Aluno aluno)
        {
            var obj = _context.Update(aluno);
            _context.SaveChanges();
            return obj.Entity;
        }

        public bool Inativar(int id)
        {
            var obj = _context.Find<Aluno>(id);

            if (obj != null)
            {
                obj.Status = false;

                obj = _context.Update(obj).Entity;

                _context.SaveChanges();
            }

            return obj != null;
        }

        public bool Ativar(int id)
        {
            var obj = _context.Find<Aluno>(id);

            if (obj != null)
            {
                obj.Status = true;

                obj = _context.Update(obj).Entity;

                _context.SaveChanges();
            }

            return obj != null;
        }
    }
}
