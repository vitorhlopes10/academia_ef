using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class EnderecoMapping : IEntityTypeConfiguration<Endereco>
    {
        public void Configure(EntityTypeBuilder<Endereco> builder)
        {
            builder.ToTable("Endereco")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd(); 

            builder.Property(x => x.Descricao)
                .HasColumnType("varchar(150)")
            .IsRequired();

            builder.Property(x => x.Estado)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.Property(x => x.Cidade)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.Property(x => x.Cep)
                .HasColumnType("varchar(10)")
            .IsRequired();

            builder.HasOne(x => x.Funcionario)
                .WithOne(s => s.Endereco)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Aluno)
                .WithOne(s => s.Endereco)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Academia)
                .WithOne(s => s.Endereco)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
