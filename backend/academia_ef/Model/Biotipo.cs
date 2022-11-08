namespace academia_ef.Model
{
    public class Biotipo
    {
        public int Id { get; set; }
        public string Tipo { get; set; }

        public virtual List<AvaliacaoFisica> AvaliacoesFisica { get; set; }
    }
}
