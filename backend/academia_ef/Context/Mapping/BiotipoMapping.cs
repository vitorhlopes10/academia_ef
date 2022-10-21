using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class BiotipoMapping : IEntityTypeConfiguration<Biotipo>
    {
        public void Configure(EntityTypeBuilder<Biotipo> builder)
        {
            builder.ToTable("Biotipo")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Tipo)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasMany(x => x.AvaliacoesFisica)
                .WithOne(s => s.Biotipo)
                .HasForeignKey(s => s.IdBiotipo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(
                new Biotipo() { Id = 1, Tipo = "Ectomorfo" },
                new Biotipo() { Id = 2, Tipo = "Mesomorfo" },
                new Biotipo() { Id = 3, Tipo = "Endomorfo" }
                );
        }
    }
}
