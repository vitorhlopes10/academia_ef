using academia_ef.ViewModel.Endereco;
using academia_ef.ViewModel.Usuario;

namespace academia_ef.ViewModel.Funcionario
{
    public class FuncionarioViewModel
    {
        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }
        public bool Fixo { get; set; }

        public UsuarioViewModel Usuario { get; set; }
        public EnderecoViewModel Endereco { get; set; }

        public int? IdUnidade { get; set; }
        public int IdSexo { get; set; }
        public int IdCargo { get; set; }
    }
}
