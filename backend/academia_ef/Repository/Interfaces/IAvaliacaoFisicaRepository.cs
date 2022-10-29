using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IAvaliacaoFisicaRepository
    {
        AvaliacaoFisica Buscar(int id);
        List<AvaliacaoFisica> BuscarTodosPorAluno(int idAluno);
        AvaliacaoFisica Inserir(AvaliacaoFisica avaliacaoFisica);
        AvaliacaoFisica Atualizar(AvaliacaoFisica avaliacaoFisica);
        bool Deletar(int id);
    }
}
