using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class AcordoMensalidadeMapping : IEntityTypeConfiguration<AcordoMensalidade>
    {
        public void Configure(EntityTypeBuilder<AcordoMensalidade> builder)
        {
            builder.ToTable("AcordoMensalidade")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd(); 

            builder.Property(x => x.DiaDataVencimento)
                .HasColumnType("int")
            .IsRequired();

            builder.HasOne(x => x.StatusMensalidade)
                .WithMany(s => s.AcordoMensalidade)
                .HasForeignKey(s => s.IdStatusMensalidade)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Aluno)
                .WithOne(s => s.AcordoMensalidade)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.PagamentosMensalidades)
                .WithOne(s => s.AcordoMensalidade)
                .HasForeignKey(s => s.IdAcordoMensalidade)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
