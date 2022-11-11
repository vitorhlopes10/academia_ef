using academia_ef.Model;

namespace academia_ef.Repository.Interfaces
{
    public interface IAvaliacaoFisicaRepository
    {
        AvaliacaoFisica Buscar(int id);
        IQueryable<AvaliacaoFisica> BuscarTodos();
        IQueryable<AvaliacaoFisica> BuscarTodosPorAluno(int id);

        AvaliacaoFisica Inserir(AvaliacaoFisica avaliacaoFisica);
        AvaliacaoFisica Atualizar(AvaliacaoFisica avaliacaoFisica);
        bool Deletar(int id);
    }
}
