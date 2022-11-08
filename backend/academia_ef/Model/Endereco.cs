namespace academia_ef.Model
{
    public class Endereco
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }

        public virtual Funcionario Funcionario { get; set; }
        public virtual Aluno Aluno { get; set; }
        public virtual Unidade Unidade { get; set; }
    }
}
