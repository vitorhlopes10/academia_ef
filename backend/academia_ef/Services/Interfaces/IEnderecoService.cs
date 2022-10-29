using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IEnderecoService
    {
        Endereco Inserir(Endereco endereco);
        Endereco Atualizar(Endereco endereco);
    }
}
