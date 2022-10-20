﻿namespace academia_ef.Model
{
    public class Aluno
    {
        public int Id { get; set; }
        public  string Cpf { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }
        public DateTime DataAdesao { get; set; }

        public int IdSexo { get; set; }
        public int IdEndereco { get; set; }
        public int IdPlano { get; set; }
        public int IdAcademia { get; set; }
        public int IdMensalidades { get; set; }
        public int IdUsuario { get; set; }

        public Sexo Sexo { get; set; }
        public Endereco Endereco { get; set; }
        public Plano Plano { get; set; }
        public Academia Academia { get; set; }
        public AcordoMensalidades Mensalidades { get; set; }
        public Usuario Usuario { get; set; }

        public List<Treino> Treinos { get; set; }
        public List<AvaliacaoFisica> AvaliacoesFisica { get; set; }
    }
}
