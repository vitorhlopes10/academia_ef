import { FuncionarioModel } from "./funcionario-model";

export class PatrimonioModel {
    
    constructor() {
        this.id = 0;
        this.nome = '';
        this.descricao = '';
        this.valorPago = 0;
        this.idFuncionario = 0;
    }

    id: number;
    nome: string;
    descricao: string;
    valorPago: number;

    funcionario!: FuncionarioModel;

    idFuncionario: number;
}
