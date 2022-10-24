using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class StatusUsuarioMapping : IEntityTypeConfiguration<StatusUsuario>
    {
        public void Configure(EntityTypeBuilder<StatusUsuario> builder)
        {
            builder.ToTable("StatusUsuario")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Descricao)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasMany(x => x.Usuarios)
                .WithOne(s => s.StatusUsuario)
                .HasForeignKey(s => s.IdStatusUsuario)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(
                new StatusUsuario() { Id = 1, Descricao = "Ativo" },
                new StatusUsuario() { Id = 2, Descricao = "Inativo" }
                );
        }
    }
}
