using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

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

        public List<PagamentoMensalidade> BuscarTodosPorAluno(int idAluno)
        {
            return _pagamentoMensalidadeRepository.BuscarTodosPorAluno(idAluno);
        }

        public PagamentoMensalidade Inserir(PagamentoMensalidade pagamentoMensalidade)
        {
            var obj = _pagamentoMensalidadeRepository.Inserir(pagamentoMensalidade);
            return obj;
        }

        public PagamentoMensalidade Atualizar(PagamentoMensalidade pagamentoMensalidade)
        {
            var obj = _pagamentoMensalidadeRepository.Atualizar(pagamentoMensalidade);
            return obj;
        }

        public bool Deletar(int id)
        {
            var deletado = _pagamentoMensalidadeRepository.Deletar(id);
            return deletado;
        }
    }
}
