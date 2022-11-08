namespace academia_ef.Model
{
    public class Cargo
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public virtual List<Funcionario> Funcionarios { get; set; }
    }
}
