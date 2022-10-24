using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class AlunoMapping : IEntityTypeConfiguration<Aluno>
    {
        public void Configure(EntityTypeBuilder<Aluno> builder)
        {
            builder.ToTable("Aluno")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Matricula)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.Property(x => x.Cpf)
                .HasColumnType("varchar(11)")
            .IsRequired();

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(150)")
            .IsRequired();

            builder.Property(x => x.Email)
                .HasColumnType("varchar(100)")
            .IsRequired();

            builder.Property(x => x.DataNascimento)
                .HasColumnType("datetime")
            .IsRequired();

            builder.Property(x => x.Telefone)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.Property(x => x.DataMatricula)
                .HasColumnType("datetime")
            .IsRequired();

            builder.HasOne(x => x.Sexo)
                .WithMany(s => s.Alunos)
                .HasForeignKey(s => s.IdSexo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Endereco)
                .WithOne(s => s.Aluno)
                .HasForeignKey<Aluno>(s => s.IdEndereco)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Plano)
                .WithMany(s => s.Alunos)
                .HasForeignKey(s => s.IdPlano)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Academia)
               .WithOne(s => s.Aluno)
               .HasForeignKey<Aluno>(s => s.IdAcademia)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.AcordoMensalidade)
               .WithOne(s => s.Aluno)
               .HasForeignKey<Aluno>(s => s.IdAcordoMensalidade)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Usuario)
               .WithOne(s => s.Aluno)
               .HasForeignKey<Aluno>(s => s.IdUsuario)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Treinos)
               .WithOne(s => s.Aluno)
               .HasForeignKey(s => s.IdAluno)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.AvaliacoesFisica)
               .WithOne(s => s.Aluno)
               .HasForeignKey(s => s.IdAluno)
               .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
