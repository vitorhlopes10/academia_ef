using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Aluno;

namespace academia_ef.Services
{
    public class AlunoService : IAlunoService
    {
        private readonly IAlunoRepository _alunoRepository;
        private readonly IAcordoMensalidadeRepository _acordoMensalidade;

        public AlunoService(IAlunoRepository alunoRepository, IAcordoMensalidadeRepository acordoMensalidade)
        {
            _alunoRepository = alunoRepository;
            _acordoMensalidade = acordoMensalidade;
        }

        public Aluno Buscar(int id)
        {
            return _alunoRepository.Buscar(id);
        }

        public List<Aluno> BuscarTodos()
        {
            return _alunoRepository.BuscarTodos().ToList();
        }

        public List<Aluno> Filtrar(AlunoFiltroViewModel filtro)
        {
            var result = _alunoRepository.BuscarTodos();

            if (result is null)
            {
                return null;
            }

            if (filtro.Matricula != null && filtro.Matricula != String.Empty)
            {
                result = result.Where(x => x.Matricula.Equals(filtro.Matricula));
            }

            if (filtro.Cpf != null && filtro.Cpf != String.Empty)
            {
                result = result.Where(x => x.Cpf.Equals(filtro.Cpf));
            }

            if (filtro.Nome != null && filtro.Nome != String.Empty)
            {
                result = result.Where(x => x.Nome.Equals(filtro.Nome));
            }

            return result.ToList();
        }

        public Aluno Inserir(AlunoViewModel novoAluno)
        {
            var obj = new Aluno();

            obj.Matricula = $"{DateTime.Now.Year}100";
            obj.Cpf = novoAluno.Cpf;
            obj.Nome = novoAluno.Nome;
            obj.Email = novoAluno.Email;
            obj.DataNascimento = novoAluno.DataNascimento;
            obj.Telefone = novoAluno.Telefone;
            obj.DataMatricula = DateTime.Now;
            obj.Status = true;

            obj.IdUnidade = novoAluno.IdUnidade;
            obj.IdSexo = novoAluno.IdSexo;
            obj.IdPlano = novoAluno.IdPlano;

            var retorno = _alunoRepository.Inserir(obj);

            return retorno;
        }

        public Aluno Atualizar(AlunoViewModel aluno)
        {
            var obj = _alunoRepository.Buscar(aluno.Id);

            obj.Cpf = aluno.Cpf;
            obj.Nome = aluno.Nome;
            obj.Email = aluno.Email;
            obj.DataNascimento = aluno.DataNascimento;
            obj.Telefone = aluno.Telefone;

            obj.IdUnidade = aluno.IdUnidade;
            obj.IdSexo = aluno.IdSexo;
            obj.IdPlano = aluno.IdPlano;

            var retorno = _alunoRepository.Atualizar(obj);

            return retorno;
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
