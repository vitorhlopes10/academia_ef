using academia_ef.Model;

namespace academia_ef.Services.Interfaces
{
    public interface IAvaliacaoFisicaService
    {
        AvaliacaoFisica Buscar(int id);
        List<AvaliacaoFisica> BuscarTodos();
        AvaliacaoFisica Inserir(AvaliacaoFisica avaliacaoFisica);
        AvaliacaoFisica Atualizar(AvaliacaoFisica avaliacaoFisica);
        bool Deletar(int id);
    }
}
