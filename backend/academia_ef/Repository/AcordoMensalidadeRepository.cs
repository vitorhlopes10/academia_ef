using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class AcordoMensalidadeRepository : IAcordoMensalidadeRepository
    {
        private readonly AcademiaEfContext _context;

        public AcordoMensalidadeRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public AcordoMensalidade Inserir(AcordoMensalidade acordoMensalidade)
        {
            var obj = _context.Add(acordoMensalidade);
            _context.SaveChanges();
            return obj.Entity;
        }

        public AcordoMensalidade Atualizar(AcordoMensalidade acordoMensalidade)
        {
            var obj = _context.Update(acordoMensalidade);
            _context.SaveChanges();
            return obj.Entity;
        }
    }
}
