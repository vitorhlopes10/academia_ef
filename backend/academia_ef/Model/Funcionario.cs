namespace academia_ef.Model
{
    public class Funcionario
    {
        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public bool Fixo { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }
        public bool Status { get; set; }

        public Sexo Sexo { get; set; }
        public Endereco Endereco { get; set; }
        public Unidade Unidade { get; set; }
        public Usuario Usuario { get; set; }
        public Cargo Cargo { get; set; }

        public List<Treino> Treinos { get; set; }
        public List<AvaliacaoFisica> AvaliacoesFisica { get; set; }
        public List<PagamentoMensalidade> PagamentosMensalidades { get; set; }

        public int IdSexo { get; set; }
        public int IdEndereco { get; set; }
        public int IdUsuario { get; set; }
        public int IdCargo { get; set; }
        public int? IdAcademia { get; set; }
    }
}
