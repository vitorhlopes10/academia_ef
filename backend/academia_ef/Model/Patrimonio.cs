namespace academia_ef.Model
{
    public class Patrimonio
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double ValorPago { get; set; }

        public virtual Usuario Usuario { get; set; }

        public int IdUsuario { get; set; }
    }
}
