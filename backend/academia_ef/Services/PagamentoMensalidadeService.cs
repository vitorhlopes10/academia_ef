using academia_ef.Model;
using academia_ef.Repository;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Pagamento;

namespace academia_ef.Services
{
    public class PagamentoMensalidadeService : IPagamentoMensalidadeService
    {
        private readonly IPagamentoMensalidadeRepository _pagamentoMensalidadeRepository;

        public PagamentoMensalidadeService(IPagamentoMensalidadeRepository pagamentoMensalidadeRepository)
        {
            _pagamentoMensalidadeRepository = pagamentoMensalidadeRepository;
        }

        public PagamentoMensalidade Buscar(int id)
        {
            return _pagamentoMensalidadeRepository.Buscar(id);
        }

        public List<PagamentoMensalidade> Filtrar(PagamentoFiltroViewModel filtro)
        {
            var result = _pagamentoMensalidadeRepository.BuscarTodos();

            if (result is null)
            {
                return null;
            }

            if (filtro.IdAluno != null && filtro.IdAluno > 0)
            {
                result = result.Where(x => x.AcordoMensalidade.Aluno.Id == (int) filtro.IdAluno);
            }

            if (!string.IsNullOrEmpty(filtro.DataInicial))
            {
                var dataInicial = DateTime.Parse(filtro.DataInicial);
                result = result.Where(x => x.DataPagamento > dataInicial);
            }

            if (!string.IsNullOrEmpty(filtro.DataFinal))
            {
                var dataFinal = DateTime.Parse(filtro.DataFinal);
                result = result.Where(x => x.DataPagamento < dataFinal);
            }

            return result.ToList();
        }

        public List<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno)
        {
            return _pagamentoMensalidadeRepository.BuscarTodosPorAluno(idAluno).OrderByDescending(x => x.Id).ToList();
        }

        public PagamentoMensalidade RegistrarPagamento(PagamentoViewModel novoPagamento)
        {
            var obj = new PagamentoMensalidade();

            obj.ValorPago = novoPagamento.ValorPago;
            obj.DataPagamento = DateTime.Now;

            obj.IdAcordoMensalidade = novoPagamento.IdAcordoMensalidade;
            obj.IdFuncionario = novoPagamento.IdFuncionario;

            var retorno = _pagamentoMensalidadeRepository.RegistrarPagamento(obj);

            return retorno;
        }

        public bool Deletar(int id)
        {
            var deletado = _pagamentoMensalidadeRepository.Deletar(id);
            return deletado;
        }
    }
}
