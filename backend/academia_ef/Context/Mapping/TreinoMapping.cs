using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class TreinoMapping : IEntityTypeConfiguration<Treino>
    {
        public void Configure(EntityTypeBuilder<Treino> builder)
        {
            builder.ToTable("Treino")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Descricao)
                .HasColumnType("nvarchar(max)")
            .IsRequired();

            builder.Property(x => x.DataCriacao)
                .HasColumnType("datetime")
            .IsRequired();

            builder.HasOne(x => x.Aluno)
                .WithMany(s => s.Treinos)
                .HasForeignKey(s => s.IdAluno)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Funcionario)
                .WithMany(s => s.Treinos)
                .HasForeignKey(s => s.IdFuncionario)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
