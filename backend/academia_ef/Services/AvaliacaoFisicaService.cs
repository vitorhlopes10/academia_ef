using academia_ef.Model;
using academia_ef.Repository;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.AvaliacaoFisica;

namespace academia_ef.Services
{
    public class AvaliacaoFisicaService : IAvaliacaoFisicaService
    {
        private readonly IAvaliacaoFisicaRepository _avaliacaoFisicaRepository;

        public AvaliacaoFisicaService(IAvaliacaoFisicaRepository avaliacaoFisicaRepository)
        {
            _avaliacaoFisicaRepository = avaliacaoFisicaRepository;
        }

        public AvaliacaoFisica Buscar(int id)
        {
            return _avaliacaoFisicaRepository.Buscar(id);
        }

        public List<AvaliacaoFisica> Filtrar(AvaliacaoFisicaFiltroViewModel filtro)
        {
            var result = _avaliacaoFisicaRepository.BuscarTodos();

            if (result is null)
            {
                return null;
            }

            if (filtro.NomeAluno != null && filtro.NomeAluno != String.Empty)
            {
                result = result.Where(x => x.Aluno.Nome.Equals(filtro.NomeAluno));
            }

            if (filtro.DataInicial != null)
            {
                result = result.Where(x => x.DataCriacao > filtro.DataInicial);
            }

            if (filtro.DataInicial != null)
            {
                result = result.Where(x => x.DataCriacao < filtro.DataFinal);
            }

            return result.ToList();
        }

        public List<AvaliacaoFisica> BuscarTodos()
        {
            return _avaliacaoFisicaRepository.BuscarTodos().OrderByDescending(x => x.Id).ToList();
        }

        public AvaliacaoFisica Inserir(AvaliacaoFisicaViewModel novaAvaliacaoFisica)
        {
            var obj = new AvaliacaoFisica();

            obj.DataCriacao = novaAvaliacaoFisica.DataCriacao;
            obj.Idade = novaAvaliacaoFisica.Idade;
            obj.Peso = novaAvaliacaoFisica.Peso;
            obj.Altura = novaAvaliacaoFisica.Altura;
            obj.LarguraEntreOmbros = novaAvaliacaoFisica.LarguraEntreOmbros;
            obj.LarguraBracoRelaxado = novaAvaliacaoFisica.LarguraBracoRelaxado;
            obj.LarguraBracoContraido = novaAvaliacaoFisica.LarguraBracoContraido;
            obj.Antebraco = novaAvaliacaoFisica.Antebraco;
            obj.Torax = novaAvaliacaoFisica.Torax;
            obj.Panturrilha = novaAvaliacaoFisica.Panturrilha;
            obj.Cintura = novaAvaliacaoFisica.Cintura;
            obj.Abdomen = novaAvaliacaoFisica.Abdomen;
            obj.Quadril = novaAvaliacaoFisica.Quadril;
            obj.Coxa = novaAvaliacaoFisica.Coxa;
            obj.Imc = novaAvaliacaoFisica.Peso / (novaAvaliacaoFisica.Altura * novaAvaliacaoFisica.Altura);

            obj.IdBiotipo = novaAvaliacaoFisica.IdBiotipo;
            obj.IdAluno = novaAvaliacaoFisica.IdAluno;
            obj.IdFuncionario = novaAvaliacaoFisica.IdFuncionario;

            var retorno = _avaliacaoFisicaRepository.Inserir(obj);

            return retorno;
        }

        public AvaliacaoFisica Atualizar(AvaliacaoFisicaViewModel avaliacaoFisica)
        {
            var obj = _avaliacaoFisicaRepository.Buscar(avaliacaoFisica.Id);

            obj.Id = avaliacaoFisica.Id;
            obj.DataCriacao = avaliacaoFisica.DataCriacao;
            obj.Idade = avaliacaoFisica.Idade;
            obj.Peso = avaliacaoFisica.Peso;
            obj.Altura = avaliacaoFisica.Altura;
            obj.LarguraEntreOmbros = avaliacaoFisica.LarguraEntreOmbros;
            obj.LarguraBracoRelaxado = avaliacaoFisica.LarguraBracoRelaxado;
            obj.LarguraBracoContraido = avaliacaoFisica.LarguraBracoContraido;
            obj.Antebraco = avaliacaoFisica.Antebraco;
            obj.Torax = avaliacaoFisica.Torax;
            obj.Panturrilha = avaliacaoFisica.Panturrilha;
            obj.Cintura = avaliacaoFisica.Cintura;
            obj.Abdomen = avaliacaoFisica.Abdomen;
            obj.Quadril = avaliacaoFisica.Quadril;
            obj.Coxa = avaliacaoFisica.Coxa;
            obj.Imc = avaliacaoFisica.Peso / (avaliacaoFisica.Altura * avaliacaoFisica.Altura);

            obj.IdBiotipo = avaliacaoFisica.IdBiotipo;
            obj.IdAluno = avaliacaoFisica.IdAluno;
            obj.IdFuncionario = avaliacaoFisica.IdFuncionario;

            var retorno = _avaliacaoFisicaRepository.Atualizar(obj);

            return retorno;
        }

        public bool Deletar(int id)
        {
            var deletado = _avaliacaoFisicaRepository.Deletar(id);
            return deletado;
        }
    }
}
