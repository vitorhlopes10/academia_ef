using academia_ef.Model;
using academia_ef.ViewModel.AvaliacaoFisica;

namespace academia_ef.Services.Interfaces
{
    public interface IAvaliacaoFisicaService
    {
        AvaliacaoFisica Buscar(int id);
        List<AvaliacaoFisica> Filtrar(AvaliacaoFisicaFiltroViewModel filtro);
        List<AvaliacaoFisica> BuscarTodos();
        AvaliacaoFisica Inserir(AvaliacaoFisicaViewModel avaliacaoFisica);
        AvaliacaoFisica Atualizar(AvaliacaoFisicaViewModel avaliacaoFisica);
        bool Deletar(int id);
    }
}
