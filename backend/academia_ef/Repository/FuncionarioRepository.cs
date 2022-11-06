using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class FuncionarioRepository : IFuncionarioRepository
    {
        private readonly AcademiaEfContext _context;

        public FuncionarioRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Funcionario Buscar(int id)
        {
            var obj = _context.Find<Funcionario>(typeof(Aluno), id);
            return obj;
        }

        public IQueryable<Funcionario> BuscarTodos()
        {
            var obj = _context.Funcionario.AsQueryable();
            return obj;
        }

        public Funcionario Inserir(Funcionario aluno)
        {
            var obj = _context.Add(aluno);
            _context.SaveChanges();
            return obj.Entity;
        }

        public Funcionario Atualizar(Funcionario aluno)
        {
            var obj = _context.Update(aluno);
            _context.SaveChanges();
            return obj.Entity;
        }

        public bool Inativar(int id)
        {
            var obj = _context.Find<Funcionario>(id);

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
            var obj = _context.Find<Funcionario>(id);

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
