namespace academia_ef.Model
{
    public class AcordoMensalidade
    {
        public int Id { get; set; }
        public int DiaDataVencimento { get; set; }

        public virtual StatusMensalidade StatusMensalidade { get; set; }
        public virtual Aluno Aluno { get; set; }

        public virtual List<PagamentoMensalidade> PagamentosMensalidades { get; set; }

        public int IdStatusMensalidade { get; set; }
    }
}
