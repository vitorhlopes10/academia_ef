import { AlunoModel } from "./aluno-model";
import { FuncionarioModel } from "./funcionario-model";
import { UnidadeModel } from "./unidade-model";

export class EnderecoModel {

    constructor() {
        this.id = 0;
        this.descricao = '';
        this.cidade = '';
        this.estado = '';
        this.cep = '';
    }

    id: number;
    descricao: string;
    cidade: string;
    estado: string;
    cep: string;

    funcionario!: FuncionarioModel;
    aluno!: AlunoModel;
    unidade!: UnidadeModel;
}
