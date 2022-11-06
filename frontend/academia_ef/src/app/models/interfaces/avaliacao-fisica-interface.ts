import { AlunoInterface } from "./aluno-interface"
import { BiotipoInterface } from "./biotipo-interface"
import { FuncionarioInterface } from "./funcionario-model"

export interface AvaliacaoFisicaInterface {
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

    biotipo: BiotipoInterface;
    aluno: AlunoInterface;
    funcionario: FuncionarioInterface;

    idBiotipo: number;
    idAluno: number;
    idFuncionario: number;
}
