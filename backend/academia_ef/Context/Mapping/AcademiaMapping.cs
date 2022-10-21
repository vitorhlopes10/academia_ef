using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class AcademiaMapping : IEntityTypeConfiguration<Academia>
    {
        public void Configure(EntityTypeBuilder<Academia> builder)
        {
            builder.ToTable("Academia")
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
                .WithOne(s => s.Academia)
                .HasForeignKey<Academia>(s => s.IdEndereco)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Aluno)
                .WithOne(s => s.Academia)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Funcionario)
                .WithOne(s => s.Academia)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
