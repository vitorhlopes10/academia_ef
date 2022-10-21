namespace academia_ef.Model
{
    public class StatusMensalidade
    {
        public int Id { get; set; }
        public string Descricao { get; set; }

        public List<AcordoMensalidade> AcordoMensalidade { get; set; }
    }
}
