using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class StatusMensalidadeMapping : IEntityTypeConfiguration<StatusMensalidade>
    {
        public void Configure(EntityTypeBuilder<StatusMensalidade> builder)
        {
            builder.ToTable("StatusMensalidade")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd(); 

            builder.Property(x => x.Descricao)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasMany(x => x.AcordoMensalidade)
                .WithOne(s => s.StatusMensalidade)
                .HasForeignKey(s => s.IdStatusMensalidade)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasData(
                new StatusMensalidade() { Id = 1, Descricao = "Em Aberto" },
                new StatusMensalidade() { Id = 2, Descricao = "Pago" }
                );
        }
    }
}
