import { AlunoModel } from "./aluno-model";
import { FuncionarioModel } from "./funcionario-model";

export class TreinoModel {
    
    constructor() {
        this.id = 0;
        this.descricao = '';
        this.dataCriacao = new Date();

        this.idAluno = 0;
        this.idFuncionario = 0;
    }

    id: number;
    descricao: string;
    dataCriacao: Date;

    aluno!: AlunoModel;
    funcionario!: FuncionarioModel;

    idAluno: number;
    idFuncionario: number;
}
