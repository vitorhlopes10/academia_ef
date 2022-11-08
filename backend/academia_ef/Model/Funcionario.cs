namespace academia_ef.Model
{
    public class Funcionario
    {
        public Funcionario()
        {
            Endereco = new Endereco();
            Usuario = new Usuario();
        }

        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public bool Fixo { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }
        public bool Status { get; set; }

        public virtual Sexo Sexo { get; set; }
        public virtual Endereco Endereco { get; set; }
        public virtual Unidade Unidade { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual Cargo Cargo { get; set; }

        public virtual List<Treino> Treinos { get; set; }
        public virtual List<AvaliacaoFisica> AvaliacoesFisica { get; set; }
        public virtual List<PagamentoMensalidade> PagamentosMensalidades { get; set; }

        public int IdSexo { get; set; }
        public int IdEndereco { get; set; }
        public int IdUsuario { get; set; }
        public int IdCargo { get; set; }
        public int? IdUnidade { get; set; }
    }
}
