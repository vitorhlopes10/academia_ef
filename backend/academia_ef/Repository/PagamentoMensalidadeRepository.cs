using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class PagamentoMensalidadeRepository : IPagamentoMensalidadeRepository
    {
        private readonly AcademiaEfContext _context;

        public PagamentoMensalidadeRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public PagamentoMensalidade Buscar(int id)
        {
            var obj = _context.Find<PagamentoMensalidade>(id);
            return obj;
        }

        public IQueryable<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno)
        {
            var obj = _context.PagamentoMensalidade.Where(x => x.AcordoMensalidade.Aluno.Id == idAluno);
            return obj;
        }

        public IQueryable<PagamentoMensalidade> BuscarTodos()
        {
            var obj = _context.PagamentoMensalidade.AsQueryable();
            return obj;
        }

        public PagamentoMensalidade RegistrarPagamento(PagamentoMensalidade pagamentoMensalidade)
        {
            var obj = _context.Add(pagamentoMensalidade);
            _context.SaveChanges();
            return obj.Entity;
        }

        public bool Deletar(int id)
        {
            var obj = _context.Find<PagamentoMensalidade>(id);

            if (obj != null)
            {
                _context.Remove(obj);
                _context.SaveChanges();
            }

            return obj != null;
        }
    }
}
