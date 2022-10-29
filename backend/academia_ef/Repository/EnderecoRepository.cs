using academia_ef.Context;
using academia_ef.Model;
using academia_ef.Repository.Interfaces;

namespace academia_ef.Repository
{
    public class EnderecoRepository : IEnderecoRepository
    {
        private readonly AcademiaEfContext _context;

        public EnderecoRepository(AcademiaEfContext context)
        {
            _context = context;
        }

        public Endereco Inserir(Endereco endereco)
        {
            var obj = _context.Add(endereco);
            _context.SaveChanges();
            return obj.Entity;
        }

        public Endereco Atualizar(Endereco endereco)
        {
            var obj = _context.Update(endereco);
            _context.SaveChanges();
            return obj.Entity;
        }
    }
}
