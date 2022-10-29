using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class EnderecoService : IEnderecoService
    {
        private readonly IEnderecoRepository _enderecoRepository;

        public EnderecoService(IEnderecoRepository enderecoRepository)
        {
            _enderecoRepository = enderecoRepository;
        }

        public Endereco Inserir(Endereco endereco)
        {
            return _enderecoRepository.Inserir(endereco);
        }

        public Endereco Atualizar(Endereco endereco)
        {
            return _enderecoRepository.Atualizar(endereco);
        }
    }
}
