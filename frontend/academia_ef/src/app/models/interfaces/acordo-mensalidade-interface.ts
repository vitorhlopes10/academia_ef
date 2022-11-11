import { AlunoInterface } from "./aluno-interface"
import { PagamentoMensalidadeInterface } from "./pagamento-mensalidade-interface"
import { StatusMensalidadeInterface } from "./status-mensalidade-interface"

export interface AcordoMensalidadeInterface {
    id: number;
    diaDataVencimento: number;

    aluno: AlunoInterface;
    statusMensalidade: StatusMensalidadeInterface;

    pagamentosMensalidades: PagamentoMensalidadeInterface[];

    idStatusMensalidade: number;
}
