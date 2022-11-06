﻿using academia_ef.Model;
using academia_ef.Repository;
using academia_ef.Repository.Interfaces;
using academia_ef.Services.Interfaces;
using academia_ef.ViewModel.Aluno;
using academia_ef.ViewModel.Funcionario;

namespace academia_ef.Services
{
    public class FuncionarioService : IFuncionarioService
    {
        private readonly IFuncionarioRepository _funcionarioRepository;

        public FuncionarioService(IFuncionarioRepository funcionarioRepository)
        {
            _funcionarioRepository = funcionarioRepository;
        }

        public Funcionario Buscar(int id)
        {
            return _funcionarioRepository.Buscar(id);
        }

        public List<Funcionario> BuscarTodos()
        {
            return _funcionarioRepository.BuscarTodos().ToList();
        }

        public List<Funcionario> Filtrar(FuncionarioFiltroViewModel filtro)
        {
            var result = _funcionarioRepository.BuscarTodos();

            if (result is null)
            {
                return null;
            }

            if (filtro.Matricula != null && filtro.Matricula != String.Empty)
            {
                result = result.Where(x => x.Matricula.Equals(filtro.Matricula));
            }

            if (filtro.Cpf != null && filtro.Cpf != String.Empty)
            {
                result = result.Where(x => x.Cpf.Equals(filtro.Cpf));
            }

            if (filtro.Nome != null && filtro.Nome != String.Empty)
            {
                result = result.Where(x => x.Nome.Equals(filtro.Nome));
            }

            return result.ToList();
        }

        public Funcionario Inserir(Funcionario funcionario)
        {
            var obj = _funcionarioRepository.Inserir(funcionario);
            return obj;
        }

        public Funcionario Atualizar(Funcionario funcionario)
        {
            var obj = _funcionarioRepository.Atualizar(funcionario);
            return obj;
        }

        public bool Inativar(int id)
        {
            var deletado = _funcionarioRepository.Inativar(id);
            return deletado;
        }

        public bool Ativar(int id)
        {
            var ativado = _funcionarioRepository.Ativar(id);
            return ativado;
        }
    }
}
