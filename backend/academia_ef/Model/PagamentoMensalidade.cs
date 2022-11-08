namespace academia_ef.Model
{
    public class PagamentoMensalidade
    {
        public int Id { get; set; }
        public double ValorPago { get; set; }
        public DateTime DataPagamento { get; set; }

        public virtual Funcionario Funcionario { get; set; }
        public virtual AcordoMensalidade AcordoMensalidade { get; set; }

        public int IdFuncionario { get; set; }
        public int IdAcordoMensalidade { get; set; }
    }
}
