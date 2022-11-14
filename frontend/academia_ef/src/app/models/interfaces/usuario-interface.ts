import { AlunoModel } from "../aluno-model";
import { FuncionarioModel } from "../funcionario-model";
import { PatrimonioModel } from "../patrimonio-model";
import { StatusUsuarioModel } from "../status-usuario-model";

export interface UsuarioInterface {
    id: number;
    login: string;
    senha: string;

    aluno: AlunoModel;
    funcionario: FuncionarioModel;
    statusUsuario: StatusUsuarioModel;

    idStatusUsuario: number;
}
