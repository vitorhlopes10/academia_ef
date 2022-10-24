using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class PatrimonioMapping : IEntityTypeConfiguration<Patrimonio>
    {
        public void Configure(EntityTypeBuilder<Patrimonio> builder)
        {
            builder.ToTable("Patrimonio")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(100)")
            .IsRequired();

            builder.Property(x => x.Descricao)
                .HasColumnType("nvarchar(max)")
            .IsRequired();

            builder.Property(x => x.ValorPago)
                .HasColumnType("float")
            .IsRequired();

            builder.HasOne(x => x.Usuario)
                .WithOne(s => s.Patrimonio)
                .HasForeignKey<Patrimonio>(s => s.IdUsuario)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
