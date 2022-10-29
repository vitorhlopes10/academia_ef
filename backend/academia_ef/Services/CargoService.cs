using academia_ef.Model;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;

namespace academia_ef.Services
{
    public class CargoService : ICargoService
    {
        private readonly ICargoRepository _cargoRepository;

        public CargoService(ICargoRepository cargoRepository)
        {
            _cargoRepository = cargoRepository;
        }

        public Cargo Buscar(int id)
        {
            return _cargoRepository.Buscar(id);
        }

        public List<Cargo> BuscarTodos()
        {
            return _cargoRepository.BuscarTodos();
        }
    }
}
