namespace academia_ef.Model
{
    public class AvaliacaoFisica
    {
        public int Id { get; set; }
        public DateTime DataCriacao { get; set; }
        public int Idade { get; set; }
        public double Peso { get; set; }
        public double Altura { get; set; }
        public double LarguraEntreOmbros { get; set; }
        public double LarguraBracoRelaxado { get; set; }
        public double LarguraBracoContraido { get; set; }
        public double Antebraco { get; set; }
        public double Torax { get; set; }
        public double Panturrilha { get; set; }
        public double Cintura { get; set; }
        public double Abdomen { get; set; }
        public double Quadril { get; set; }
        public double Coxa { get; set; }
        public double Imc { get; set; }

        public virtual Biotipo Biotipo { get; set; }
        public virtual Aluno Aluno { get; set; }
        public virtual Funcionario Funcionario { get; set; }

        public int IdBiotipo { get; set; }
        public int IdAluno { get; set; }
        public int IdFuncionario { get; set; }
    }
}
