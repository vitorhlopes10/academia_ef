using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class AcordoMensalidadeService : IAcordoMensalidadeService
    {
        private readonly IAcordoMensalidadeRepository _acordoMensalidadeService;

        public AcordoMensalidadeService(IAcordoMensalidadeRepository acordoMensalidadeService)
        {
            _acordoMensalidadeService = acordoMensalidadeService;
        }

        public AcordoMensalidade Inserir(AcordoMensalidade acordoMensalidade)
        {
            return _acordoMensalidadeService.Inserir(acordoMensalidade);
        }

        public AcordoMensalidade Atualizar(AcordoMensalidade acordoMensalidade)
        {
            return _acordoMensalidadeService.Inserir(acordoMensalidade);
        }
    }
}
