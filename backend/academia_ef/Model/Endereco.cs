namespace academia_ef.Model
{
    public class Endereco
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }

        public Funcionario Funcionario { get; set; }
        public Aluno Aluno { get; set; }
        public Academia Academia { get; set; }
    }
}
