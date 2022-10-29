using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class AlunoService : IAlunoService
    {
        private readonly IAlunoRepository _alunoRepository;

        public AlunoService(IAlunoRepository alunoRepository)
        {
            _alunoRepository = alunoRepository;
        }

        public Aluno Buscar(int id)
        {
            return _alunoRepository.Buscar(id);
        }

        public List<Aluno> BuscarTodos()
        {
            return _alunoRepository.BuscarTodos();
        }

        public Aluno Inserir(Aluno aluno)
        {
            var obj = _alunoRepository.Inserir(aluno);
            return obj;
        }

        public Aluno Atualizar(Aluno aluno)
        {
            var obj = _alunoRepository.Atualizar(aluno);
            return obj;
        }

        public bool Inativar(int id)
        {
            var deletado = _alunoRepository.Inativar(id);
            return deletado;
        }

        public bool Ativar(int id)
        {
            var ativado = _alunoRepository.Ativar(id);
            return ativado;
        }
    }
}
