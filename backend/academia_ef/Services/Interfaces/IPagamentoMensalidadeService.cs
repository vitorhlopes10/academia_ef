using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IPagamentoMensalidadeService
    {
        PagamentoMensalidade Buscar(int id);
        List<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno);
        PagamentoMensalidade Inserir(PagamentoMensalidade pagamentoMensalidade);
        PagamentoMensalidade Atualizar(PagamentoMensalidade pagamentoMensalidade);
        bool Deletar(int id);
    }
}
