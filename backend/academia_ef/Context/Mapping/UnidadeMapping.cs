using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class UnidadeMapping : IEntityTypeConfiguration<Unidade>
    {
        public void Configure(EntityTypeBuilder<Unidade> builder)
        {
            builder.ToTable("Unidade")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(100)")
            .IsRequired();

            builder.Property(x => x.Cnpj)
                .HasColumnType("varchar(14)")
            .IsRequired();

            builder.Property(x => x.Telefone)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasOne(x => x.Endereco)
                .WithOne(s => s.Unidade)
                .HasForeignKey<Unidade>(s => s.IdEndereco)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Alunos)
                .WithOne(s => s.Unidade)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Funcionarios)
                .WithOne(s => s.Unidade)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(new Unidade()
            {
                Id = 1,
                Nome = "Equilíbrio Fitness - Riacho Fundo II",
                Cnpj = "42696940000107",
                Telefone = "3434-5340",
                IdEndereco = 1
            },
            new Unidade()
            {
                Id = 2,
                Nome = "Equilíbrio Fitness - Recanto das Emas",
                Cnpj = "58013325000199",
                Telefone = "3434-5460",
                IdEndereco = 2
            });
        }
    }
}
