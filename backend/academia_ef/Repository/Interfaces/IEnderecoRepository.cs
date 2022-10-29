using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IEnderecoRepository
    {
        Endereco Inserir(Endereco endereco);
        Endereco Atualizar(Endereco endereco);
    }
}
