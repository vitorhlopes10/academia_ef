using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class AvaliacaoFisicaMapping : IEntityTypeConfiguration<AvaliacaoFisica>
    {
        public void Configure(EntityTypeBuilder<AvaliacaoFisica> builder)
        {
            builder.ToTable("AvaliacaoFisica")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.DataCriacao)
                .HasColumnType("datetime")
            .IsRequired();

            builder.Property(x => x.Idade)
                .HasColumnType("int")
            .IsRequired();

            builder.Property(x => x.Peso)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Altura)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.LarguraEntreOmbros)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.LarguraBracoRelaxado)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.LarguraBracoContraido)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Antebraco)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Torax)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Panturrilha)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Cintura)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Abdomen)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Quadril)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Coxa)
                .HasColumnType("float")
            .IsRequired();

            builder.Property(x => x.Imc)
                .HasColumnType("float")
            .IsRequired();

            builder.HasOne(x => x.Biotipo)
                .WithMany(s => s.AvaliacoesFisica)
                .HasForeignKey(s => s.IdBiotipo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Aluno)
                .WithMany(s => s.AvaliacoesFisica)
                .HasForeignKey(s => s.IdAluno)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Funcionario)
                .WithMany(s => s.AvaliacoesFisica)
                .HasForeignKey(s => s.IdFuncionario)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
