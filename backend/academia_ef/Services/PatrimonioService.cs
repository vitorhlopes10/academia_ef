using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

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

        public Patrimonio Inserir(Patrimonio aluno)
        {
            var obj = _patrimonioRepository.Inserir(aluno);
            return obj;
        }

        public Patrimonio Atualizar(Patrimonio aluno)
        {
            var obj = _patrimonioRepository.Atualizar(aluno);
            return obj;
        }

        public bool Deletar(int id)
        {
            var deletado = _patrimonioRepository.Deletar(id);
            return deletado;
        }
    }
}
