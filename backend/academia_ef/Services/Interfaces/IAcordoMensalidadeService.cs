using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IAcordoMensalidadeService
    {
        AcordoMensalidade Inserir(AcordoMensalidade acordoMensalidade);
        AcordoMensalidade Atualizar(AcordoMensalidade acordoMensalidade);
    }
}
