using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Patrimonio;

namespace academia_ef.Services
{
    public class PatrimonioService : IPatrimonioService
    {
        private readonly IPatrimonioRepository _patrimonioRepository;

        public PatrimonioService(IPatrimonioRepository alunoRepository)
        {
            _patrimonioRepository = alunoRepository;
        }

        public Patrimonio Buscar(int id)
        {
            return _patrimonioRepository.Buscar(id);
        }

        public List<Patrimonio> BuscarTodos()
        {
            return _patrimonioRepository.BuscarTodos();
        }

        public List<Patrimonio> Filtrar(string nome)
        {
            return _patrimonioRepository.Filtrar(nome);
        }

        public Patrimonio Inserir(PatrimonioViewModel novoItem)
        {
            var obj = new Patrimonio();

            obj.Nome = novoItem.Nome;
            obj.Descricao = novoItem.Descricao;
            obj.ValorPago = novoItem.ValorPago;
            obj.IdUsuario = novoItem.IdUsuario;

            var retorno = _patrimonioRepository.Inserir(obj);

            return retorno;
        }

        public Patrimonio Atualizar(PatrimonioViewModel item)
        {
            var obj = new Patrimonio();

            obj.Id = item.Id;
            obj.Nome = item.Nome;
            obj.Descricao = item.Descricao;
            obj.ValorPago = item.ValorPago;
            obj.IdUsuario = item.IdUsuario;

            var retorno = _patrimonioRepository.Atualizar(obj);

            return retorno;
        }

        public bool Deletar(int id)
        {
            var deletado = _patrimonioRepository.Deletar(id);
            return deletado;
        }
    }
}
