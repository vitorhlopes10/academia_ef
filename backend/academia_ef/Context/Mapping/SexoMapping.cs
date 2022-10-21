using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class SexoMapping : IEntityTypeConfiguration<Sexo>
    {
        public void Configure(EntityTypeBuilder<Sexo> builder)
        {
            builder.ToTable("Sexo")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd(); 

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasMany(x => x.Funcionarios)
                .WithOne(s => s.Sexo)
                .HasForeignKey(s => s.IdSexo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Alunos)
                .WithOne(s => s.Sexo)
                .HasForeignKey(s => s.IdSexo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(
                new Sexo() { Id = 1, Nome = "Masculino" },
                new Sexo() { Id = 2, Nome = "Feminino" }
                );
        }
    }
}
