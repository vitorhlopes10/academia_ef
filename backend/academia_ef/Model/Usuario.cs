namespace academia_ef.Model
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }

        public virtual Aluno Aluno { get; set; }
        public virtual Funcionario Funcionario { get; set; }
        public virtual List<Patrimonio> Patrimonio { get; set; }
        public virtual StatusUsuario StatusUsuario { get; set; }

        public int IdStatusUsuario { get; set; }
    }
}
