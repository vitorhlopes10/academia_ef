namespace academia_ef.Model
{
    public class Endereco
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }

        public virtual List<Funcionario> Funcionarios { get; set; }
        public virtual List<Aluno> Alunos { get; set; }
        public virtual Unidade Unidade { get; set; }
    }
}
