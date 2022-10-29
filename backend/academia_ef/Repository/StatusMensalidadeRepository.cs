using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class StatusMensalidadeRepository : IStatusMensalidadeRepository
    {
        private readonly AcademiaEfContext _context;

        public StatusMensalidadeRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public StatusMensalidade Buscar(int id)
        {
            var obj = _context.Find<StatusMensalidade>(id);
            return obj;
        }

        public List<StatusMensalidade> BuscarTodos()
        {
            var obj = _context.StatusMensalidade.ToList();
            return obj;
        }
    }
}
