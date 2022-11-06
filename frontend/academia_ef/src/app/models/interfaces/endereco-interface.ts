import { AlunoInterface } from "./aluno-interface";
import { FuncionarioInterface } from "./funcionario-model";
import { UnidadeInterface } from "./unidade-interface";

export interface EnderecoInterface {
    id: number;
    descricao: string;
    cidade: string;
    estado: string;
    cep: string;

    funcionario: FuncionarioInterface;
    aluno: AlunoInterface;
    unidade: UnidadeInterface;
}
