using academia_ef.Model;
using academia_ef.Repository;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class FuncionarioService : IFuncionarioService
    {
        private readonly IFuncionarioRepository _funcionarioRepository;

        public FuncionarioService(IFuncionarioRepository funcionarioRepository)
        {
            _funcionarioRepository = funcionarioRepository;
        }

        public Funcionario Buscar(int id)
        {
            return _funcionarioRepository.Buscar(id);
        }

        public List<Funcionario> BuscarTodos()
        {
            return _funcionarioRepository.BuscarTodos();
        }

        public Funcionario Inserir(Funcionario funcionario)
        {
            var obj = _funcionarioRepository.Inserir(funcionario);
            return obj;
        }

        public Funcionario Atualizar(Funcionario funcionario)
        {
            var obj = _funcionarioRepository.Atualizar(funcionario);
            return obj;
        }

        public bool Inativar(int id)
        {
            var deletado = _funcionarioRepository.Inativar(id);
            return deletado;
        }

        public bool Ativar(int id)
        {
            var ativado = _funcionarioRepository.Ativar(id);
            return ativado;
        }
    }
}
