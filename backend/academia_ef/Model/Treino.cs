namespace academia_ef.Model
{
    public class Treino
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }

        public virtual Aluno Aluno { get; set; }
        public virtual Funcionario Funcionario { get; set; }

        public int IdAluno { get; set; }
        public int IdFuncionario { get; set; }
    }
}
