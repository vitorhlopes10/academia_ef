import { UsuarioModel } from "./usuario-model";

export class PatrimonioModel {
    
    constructor() {
        this.id = 0;
        this.nome = '';
        this.descricao = '';
        this.valorPago = 0;
        this.idUsuario = 0;
    }

    id: number;
    nome: string;
    descricao: string;
    valorPago: number;

    usuario!: UsuarioModel;

    idUsuario: number;
}
