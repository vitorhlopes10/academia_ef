namespace academia_ef.Model
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }

        public Aluno Aluno { get; set; }
        public Funcionario Funcionario { get; set; }
        public Patrimonio Patrimonio { get; set; }
        public StatusUsuario StatusUsuario { get; set; }

        public int IdStatusUsuario { get; set; }
    }
}
