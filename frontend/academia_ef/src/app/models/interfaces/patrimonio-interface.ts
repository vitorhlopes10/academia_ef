import { UsuarioInterface } from "./usuario-interface";

export interface PatrimonioInterface {
    id: number;
    nome: string;
    descricao: string;
    valorPago: number;

    usuario: UsuarioInterface;

    idUsuario: number;
}
