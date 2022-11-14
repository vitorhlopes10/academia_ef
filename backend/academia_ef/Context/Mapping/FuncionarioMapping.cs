using academia_ef.Enums;
using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class FuncionarioMapping : IEntityTypeConfiguration<Funcionario>
    {
        public void Configure(EntityTypeBuilder<Funcionario> builder)
        {
            builder.ToTable("Funcionario")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Matricula)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.Property(x => x.Cpf)
                .HasColumnType("varchar(11)")
            .IsRequired();

            builder.Property(x => x.Nome)
                .HasColumnType("varchar(150)")
            .IsRequired();

            builder.Property(x => x.Email)
                .HasColumnType("varchar(100)")
            .IsRequired();

            builder.Property(x => x.Fixo)
                .HasColumnType("bit")
            .IsRequired();

            builder.Property(x => x.DataNascimento)
                .HasColumnType("datetime")
            .IsRequired();

            builder.Property(x => x.Telefone)
                .HasColumnType("varchar(20)")
            .IsRequired();

            builder.HasOne(x => x.Sexo)
                .WithMany(s => s.Funcionarios)
                .HasForeignKey(s => s.IdSexo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Endereco)
                .WithMany(s => s.Funcionarios)
                .HasForeignKey(s => s.IdEndereco)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Unidade)
               .WithMany(s => s.Funcionarios)
               .HasForeignKey(s => s.IdUnidade)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Usuario)
               .WithOne(s => s.Funcionario)
               .HasForeignKey<Funcionario>(s => s.IdUsuario)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Cargo)
                .WithMany(s => s.Funcionarios)
                .HasForeignKey(s => s.IdCargo)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Treinos)
               .WithOne(s => s.Funcionario)
               .HasForeignKey(s => s.IdFuncionario)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.AvaliacoesFisica)
               .WithOne(s => s.Funcionario)
               .HasForeignKey(s => s.IdFuncionario)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Patrimonio)
                .WithOne(s => s.Funcionario)
                .HasForeignKey(s => s.IdFuncionario)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
