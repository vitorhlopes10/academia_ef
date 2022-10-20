namespace academia_ef.Model
{
    public class AcordoMensalidades
    {
        public int Id { get; set; }
        public int DiaDataVencimento { get; set; }
        public bool StatusMensalidade { get; set; }

        public int IdAluno { get; set; }

        public Aluno Aluno { get; set; }

        public List<PagamentoMensalidade> PagamentosMensalidades { get; set; }
    }
}
