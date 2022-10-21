namespace academia_ef.Model
{
    public class AcordoMensalidade
    {
        public int Id { get; set; }
        public int DiaDataVencimento { get; set; }

        public StatusMensalidade StatusMensalidade { get; set; }
        public Aluno Aluno { get; set; }

        public List<PagamentoMensalidade> PagamentosMensalidades { get; set; }

        public int IdStatusMensalidade { get; set; }
    }
}
