using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class PlanoMapping : IEntityTypeConfiguration<Plano>
    {
        public void Configure(EntityTypeBuilder<Plano> builder)
        {
            builder.ToTable("Plano")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(30)")
            .IsRequired();

            builder.Property(x => x.Valor)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.DescricaoRegras)
                .HasColumnType("nvarchar(max)");

            builder.HasMany(x => x.Alunos)
                .WithOne(s => s.Plano)
                .HasForeignKey(s => s.IdPlano)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(
                new Plano { Id = 1, Nome = "Essential", Valor = 80, DescricaoRegras = "Dá acesso apenas a uma das unidades da Equilíbrio Fitness" },
                new Plano { Id = 2, Nome = "Premiun", Valor = 100, DescricaoRegras = "Dá acesso a todas as unidades da Equilíbrio Fitness" }
                );
        }
    }
}
