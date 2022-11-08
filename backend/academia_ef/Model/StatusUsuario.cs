namespace academia_ef.Model
{
    public class StatusUsuario
    {
        public int Id { get; set; }
        public string Descricao { get; set; }

        public virtual List<Usuario> Usuarios { get; set; }
    }
}
