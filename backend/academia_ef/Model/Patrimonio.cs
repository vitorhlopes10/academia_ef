namespace academia_ef.Model
{
    public class Patrimonio
    {
        public int Id { get; set; }
        public int Nome { get; set; }
        public string Descricao { get; set; }
        public double ValorPago { get; set; }

        public Usuario Usuario { get; set; }

        public int IdUsuario { get; set; }
    }
}
