using academia_ef.Model;

namespace academia_ef.ViewModel.Aluno
{
    public class AlunoViewModel
    {
        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }

        public Endereco Endereco { get; set; }

        public int? IdUnidade { get; set; }
        public int IdSexo { get; set; }
        public int IdPlano { get; set; }
    }
}
