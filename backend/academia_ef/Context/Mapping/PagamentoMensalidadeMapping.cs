using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class PagamentoMensalidadeMapping : IEntityTypeConfiguration<PagamentoMensalidade>
    {
        public void Configure(EntityTypeBuilder<PagamentoMensalidade> builder)
        {
            builder.ToTable("PagamentoMensalidade")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd(); 

            builder.Property(x => x.ValorPago)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.Property(x => x.DataPagamento)
                .HasColumnType("datetime")
            .IsRequired();

            builder.HasOne(x => x.Funcionario)
                .WithMany(s => s.PagamentosMensalidades)
                .HasForeignKey(s => s.IdFuncionario)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.AcordoMensalidade)
                .WithMany(s => s.PagamentosMensalidades)
                .HasForeignKey(s => s.IdAcordoMensalidade)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
