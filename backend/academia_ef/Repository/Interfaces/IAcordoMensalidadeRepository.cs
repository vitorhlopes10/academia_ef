using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IAcordoMensalidadeRepository
    {
        AcordoMensalidade Inserir(AcordoMensalidade acordoMensalidade);
        AcordoMensalidade Atualizar(AcordoMensalidade acordoMensalidade);
    }
}
