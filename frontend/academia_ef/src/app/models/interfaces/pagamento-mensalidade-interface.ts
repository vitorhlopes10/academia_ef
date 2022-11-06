import { AcordoMensalidadeInterface } from "./acordo-mensalidade-interface"
import { FuncionarioInterface } from "./funcionario-model"

export interface PagamentoMensalidadeInterface {
    id: number;
    valorPago: number;
    dataPagamento: Date;

    funcionario: FuncionarioInterface;
    acordoMensalidade: AcordoMensalidadeInterface;

    idFuncionario: number;
    idAcordoMensalidade: number;
}
