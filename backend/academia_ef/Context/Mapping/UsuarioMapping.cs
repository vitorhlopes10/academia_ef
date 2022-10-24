using academia_ef.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace academia_ef.Context.Mapping
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.ToTable("Usuario")
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Login)
                .HasColumnType("varchar(50)")
            .IsRequired();

            builder.Property(x => x.Senha)
                .HasColumnType("varchar(50)")
            .IsRequired();

            builder.HasOne(x => x.Aluno)
                .WithOne(s => s.Usuario)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Funcionario)
                .WithOne(s => s.Usuario)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.StatusUsuario)
                .WithMany(s => s.Usuarios)
                .HasForeignKey(s => s.IdStatusUsuario)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
