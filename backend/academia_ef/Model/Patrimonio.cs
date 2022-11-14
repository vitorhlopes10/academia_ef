namespace academia_ef.Model
{
    public class Patrimonio
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double ValorPago { get; set; }

        public virtual Funcionario Funcionario { get; set; }

        public int IdFuncionario { get; set; }
    }
}
