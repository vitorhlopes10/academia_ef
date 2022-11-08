namespace academia_ef.Model
{
    public class Unidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }

        public virtual Endereco Endereco { get; set; }
        public virtual List<Aluno> Alunos { get; set; }
        public virtual List<Funcionario> Funcionarios { get; set; }

        public int IdEndereco { get; set; }
    }
}
