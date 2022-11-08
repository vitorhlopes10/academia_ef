import { AlunoModel } from "./aluno-model";
import { FuncionarioModel } from "./funcionario-model";
import { PatrimonioModel } from "./patrimonio-model";
import { StatusUsuarioModel } from "./status-usuario-model";

export class UsuarioModel {
    constructor() {
        this.id = 0;
        this.login = '';
        this.senha = '';

        this.idStatusUsuario = 0;
    }

    id: number;
    login: string;
    senha: string;

    aluno!: AlunoModel;
    funcionario!: FuncionarioModel;
    patrimonio!: PatrimonioModel;
    statusUsuario!: StatusUsuarioModel;

    idStatusUsuario: number;
}
