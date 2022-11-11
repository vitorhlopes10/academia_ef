using academia_ef.Enums;
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
            return _alunoRepository.BuscarTodos().OrderByDescending(x => x.Id).ToList();
        }

        public List<Aluno> Filtrar(AlunoFiltroViewModel filtro)
        {
            var result = _alunoRepository.BuscarTodos();

            if (result is null)
            {
                return null;
            }

            if (!string.IsNullOrEmpty(filtro.Matricula))
            {
                result = result.Where(x => x.Matricula.Equals(filtro.Matricula));
            }

            if (!string.IsNullOrEmpty(filtro.Cpf))
            {
                result = result.Where(x => x.Cpf.Equals(filtro.Cpf));
            }

            if (!string.IsNullOrEmpty(filtro.Nome))
            {
                result = result.Where(x => x.Nome.Equals(filtro.Nome));
            }

            return result.ToList();
        }

        public Aluno Inserir(AlunoViewModel novoAluno)
        {
            var obj = new Aluno();
            var numeroOrdem = BuscarTodos().FirstOrDefault()?.Id + 1;

            //Dados do Básicos
            obj.Matricula = $"{DateTime.Now.Year}20{100 + (numeroOrdem ?? 1)}";
            obj.Cpf = novoAluno.Cpf.Replace(".", "").Replace("-", "");
            obj.Nome = novoAluno.Nome;
            obj.Email = novoAluno.Email;
            obj.DataNascimento = novoAluno.DataNascimento;
            obj.Telefone = novoAluno.Telefone;
            obj.DataMatricula = DateTime.Now;
            obj.Status = true;

            //Dados de Endereço
            obj.Endereco.Descricao = novoAluno.Endereco.Descricao;
            obj.Endereco.Cep = novoAluno.Endereco.Cep;
            obj.Endereco.Estado = novoAluno.Endereco.Estado;
            obj.Endereco.Cidade = novoAluno.Endereco.Cidade;

            //Dados de Usuário
            obj.Usuario.Login = obj.Cpf;
            obj.Usuario.Senha = novoAluno.Usuario.Senha;
            obj.Usuario.IdStatusUsuario = (int)StatusUsuarioEnum.ATIVO;

            //Dados de Acordo de Mensalidade
            obj.AcordoMensalidade.DiaDataVencimento = obj.DataMatricula.Day;
            obj.AcordoMensalidade.IdStatusMensalidade = (int)StatusMensalidadeEnum.PAGO;

            //FKs
            obj.IdUnidade = novoAluno.IdPlano == (int)PlanoEnum.ESSENTIAL && novoAluno.IdUnidade != 0 ?
                novoAluno.IdUnidade : null;
            obj.IdSexo = novoAluno.IdSexo;
            obj.IdPlano = novoAluno.IdPlano;

            var retorno = _alunoRepository.Inserir(obj);

            return retorno;
        }

        public Aluno Atualizar(AlunoViewModel aluno)
        {
            var obj = _alunoRepository.Buscar(aluno.Id);

            //Dados do Básicos
            obj.Id = aluno.Id;
            obj.Cpf = aluno.Cpf;
            obj.Nome = aluno.Nome;
            obj.Email = aluno.Email;
            obj.DataNascimento = aluno.DataNascimento;
            obj.Telefone = aluno.Telefone;

            //Dados de Endereço
            obj.Endereco.Id = aluno.Endereco.Id;
            obj.Endereco.Descricao = aluno.Endereco.Descricao;
            obj.Endereco.Cep = aluno.Endereco.Cep;
            obj.Endereco.Estado = aluno.Endereco.Estado;
            obj.Endereco.Cidade = aluno.Endereco.Cidade;

            //FKs
            obj.IdUnidade = aluno.IdPlano == (int)PlanoEnum.ESSENTIAL && aluno.IdUnidade != 0 ?
                aluno.IdUnidade : null;
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
