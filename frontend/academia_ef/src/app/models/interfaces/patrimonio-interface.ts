import { FuncionarioInterface } from "./funcionario-model";

export interface PatrimonioInterface {
    id: number;
    nome: string;
    descricao: string;
    valorPago: number;

    funcionario: FuncionarioInterface;

    idFuncionario: number;
}
