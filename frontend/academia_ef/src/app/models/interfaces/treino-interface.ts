import { AlunoInterface } from "./aluno-interface";
import { FuncionarioInterface } from "./funcionario-model";

export interface TreinoInterface {
    id: number;
    descricao: string;
    dataCriacao: Date;

    aluno: AlunoInterface;
    funcionario: FuncionarioInterface;

    idAluno: number;
    idFuncionario: number;
}
