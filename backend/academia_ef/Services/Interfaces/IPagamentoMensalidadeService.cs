using academia_ef.Model;
using academia_ef.ViewModel.Pagamento;

namespace academia_ef.Services.Interfaces
{
    public interface IPagamentoMensalidadeService
    {
        PagamentoMensalidade Buscar(int id);
        List<PagamentoMensalidade> Filtrar(PagamentoFiltroViewModel filtro);

        List<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno);
        PagamentoMensalidade RegistrarPagamento(PagamentoViewModel pagamentoMensalidade);
        bool Deletar(int id);
    }
}
