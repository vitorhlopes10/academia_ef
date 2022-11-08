namespace academia_ef.Model
{
    public class Sexo
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public virtual List<Funcionario> Funcionarios { get; set; }
        public virtual List<Aluno> Alunos { get; set; }
    }
}
