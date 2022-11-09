using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IPagamentoMensalidadeRepository
    {
        PagamentoMensalidade Buscar(int id);
        List<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno);
        PagamentoMensalidade RegistrarPagamento(PagamentoMensalidade pagamentoMensalidade);
        bool Deletar(int id);
    }
}
