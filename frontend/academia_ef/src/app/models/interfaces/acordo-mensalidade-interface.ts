import { AlunoInterface } from "./aluno-interface"
import { PagamentoMensalidadeInterface } from "./pagamento-mensalidade-interface"
import { StatusMensalidadeInterface } from "./status-mensalidade-interface"

export interface AcordoMensalidadeInterface {
    id: number;
    diaDataVencimento: number;

    statusMensalidade: StatusMensalidadeInterface;
    aluno: AlunoInterface;

    pagamentosMensalidades: PagamentoMensalidadeInterface[];

    idStatusMensalidade: number;
}
