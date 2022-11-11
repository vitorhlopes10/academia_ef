using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IPagamentoMensalidadeRepository
    {
        PagamentoMensalidade Buscar(int id);
        IQueryable<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno);
        IQueryable<PagamentoMensalidade> BuscarTodos();
        PagamentoMensalidade RegistrarPagamento(PagamentoMensalidade pagamentoMensalidade);
        bool Deletar(int id);
    }
}
