using academia_ef.Context.Mapping;
using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace academia_ef.Context
{
    public class AcademiaEfContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=localhost;Database=ACADEMIA_EF;Trusted_Connection=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        public DbSet<Academia> Academia { get; set; }
        public DbSet<AcordoMensalidade> AcordoMensalidade { get; set; }
        public DbSet<Aluno> Aluno { get; set; }
        public DbSet<AvaliacaoFisica> AvaliacaoFisica { get; set; }
        public DbSet<Biotipo> Biotipo { get; set; }
        public DbSet<Cargo> Cargo { get; set; }
        public DbSet<Endereco> Endereco { get; set; }
        public DbSet<Funcionario> Funcionario { get; set; }
        public DbSet<PagamentoMensalidade> PagamentoMensalidade { get; set; }
        public DbSet<Plano> Plano { get; set; }
        public DbSet<Sexo> Sexo { get; set; }
        public DbSet<StatusMensalidade> StatusMensalidades { get; set; }
        public DbSet<StatusUsuario> StatusUsuario { get; set; }
        public DbSet<Treino> Treino { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
    }
}
