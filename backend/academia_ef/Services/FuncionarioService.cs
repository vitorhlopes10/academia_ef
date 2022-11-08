using academia_ef.Enums;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Funcionario;

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
            return _funcionarioRepository.BuscarTodos().OrderByDescending(x => x.Id).ToList();
        }

        public List<Funcionario> Filtrar(FuncionarioFiltroViewModel filtro)
        {
            var result = _funcionarioRepository.BuscarTodos();

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

        public Funcionario Inserir(FuncionarioViewModel funcionario)
        {
            var obj = new Funcionario();
            var numeroOrdem = BuscarTodos().FirstOrDefault()?.Id + 1;

            //Dados do Básicos
            obj.Matricula = $"{DateTime.Now.Year}10{100 + (numeroOrdem ?? 1)}";
            obj.Cpf = funcionario.Cpf.Replace(".", "").Replace("-", "");
            obj.Nome = funcionario.Nome;
            obj.Email = funcionario.Email;
            obj.DataNascimento = funcionario.DataNascimento;
            obj.Telefone = funcionario.Telefone;
            obj.Fixo = funcionario.Fixo;
            obj.Status = true;

            //Dados de Endereço
            obj.Endereco.Descricao = funcionario.Endereco.Descricao;
            obj.Endereco.Cep = funcionario.Endereco.Cep;
            obj.Endereco.Estado = funcionario.Endereco.Estado;
            obj.Endereco.Cidade = funcionario.Endereco.Cidade;

            //Dados de Usuário
            obj.Usuario.Login = obj.Cpf;
            obj.Usuario.Senha = funcionario.Usuario.Senha;
            obj.Usuario.IdStatusUsuario = (int)StatusUsuarioEnum.ATIVO;

            //FKs
            obj.IdUnidade = funcionario.Fixo && funcionario.IdUnidade != 0 ? funcionario.IdUnidade : null;
            obj.IdSexo = funcionario.IdSexo;
            obj.IdCargo = funcionario.IdCargo;

            var retorno = _funcionarioRepository.Inserir(obj);

            return retorno;
        }

        public Funcionario Atualizar(FuncionarioViewModel funcionario)
        {
            var obj = _funcionarioRepository.Buscar(funcionario.Id);

            //Dados do Básicos
            obj.Id = funcionario.Id;
            obj.Cpf = funcionario.Cpf;
            obj.Nome = funcionario.Nome;
            obj.Email = funcionario.Email;
            obj.DataNascimento = funcionario.DataNascimento;
            obj.Telefone = funcionario.Telefone;
            obj.Fixo = funcionario.Fixo;

            //Dados de Endereço
            obj.Endereco.Id = funcionario.Endereco.Id;
            obj.Endereco.Descricao = funcionario.Endereco.Descricao;
            obj.Endereco.Cep = funcionario.Endereco.Cep;
            obj.Endereco.Estado = funcionario.Endereco.Estado;
            obj.Endereco.Cidade = funcionario.Endereco.Cidade;

            //FKs
            obj.IdUnidade = funcionario.Fixo && funcionario.IdUnidade != 0 ? funcionario.IdUnidade : null;
            obj.IdSexo = funcionario.IdSexo;
            obj.IdCargo = funcionario.IdCargo;

            var retorno = _funcionarioRepository.Atualizar(obj);

            return retorno;
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
