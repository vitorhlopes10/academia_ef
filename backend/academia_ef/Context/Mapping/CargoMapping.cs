using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class CargoMapping : IEntityTypeConfiguration<Cargo>
    {
        public void Configure(EntityTypeBuilder<Cargo> builder)
        {
            builder.ToTable("Cargo")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasMany(x => x.Funcionarios)
                .WithOne(s => s.Cargo)
                .HasForeignKey(s => s.IdCargo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(
                new Cargo() { Id = 1, Nome = "Instrutor" },
                new Cargo() { Id = 2, Nome = "Atendente" }
                );
        }
    }
}
