import { AlunoModel } from "./aluno-model"
import { BiotipoModel } from "./biotipo-model"
import { FuncionarioModel } from "./funcionario-model"

export class AvaliacaoFisicaModel {

    constructor(){
        this.id = 0;
        this.dataCriacao = new Date();
        this.idade = 0;
        this.peso = 0;
        this.altura = 0;
        this.larguraEntreOmbros = 0;
        this.larguraBracoRelaxado = 0;
        this.larguraBracoContraido = 0;
        this.antebraco = 0;
        this.torax = 0;
        this.panturrilha = 0;
        this.cintura = 0;
        this.abdomen = 0;
        this.quadril = 0;
        this.coxa = 0;
        this.imc = 0;
        this.idBiotipo = 0;
        this.idAluno = 0;
        this.idFuncionario = 0;
    }

    id: number;
    dataCriacao: Date;
    idade: number;
    peso: number;
    altura: number;
    larguraEntreOmbros: number;
    larguraBracoRelaxado: number;
    larguraBracoContraido: number;
    antebraco: number;
    torax: number;
    panturrilha: number;
    cintura: number;
    abdomen: number;
    quadril: number;
    coxa: number;
    imc: number;
 
    biotipo!: BiotipoModel;
    aluno!: AlunoModel;
    funcionario!: FuncionarioModel;

    idBiotipo: number;
    idAluno: number;
    idFuncionario: number;
}
