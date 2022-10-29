namespace academia_ef.Model
{
    public class Unidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }

        public Endereco Endereco { get; set; }
        public Aluno Aluno { get; set; }
        public Funcionario Funcionario { get; set; }

        public int IdEndereco { get; set; }
    }
}
