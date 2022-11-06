import { AcordoMensalidadeModel } from "./acordo-mensalidade-model"
import { FuncionarioModel } from "./funcionario-model"

export class PagamentoMensalidadeModel {
    
    constructor() {
        this.id = 0;
        this.valorPago = 0;
        this.dataPagamento = new Date();
        this.idFuncionario = 0;
        this.idAcordoMensalidade = 0;
    }

    id: number;
    valorPago: number;
    dataPagamento: Date;

    funcionario!: FuncionarioModel;
    acordoMensalidade!: AcordoMensalidadeModel;

    idFuncionario: number;
    idAcordoMensalidade: number;
}
