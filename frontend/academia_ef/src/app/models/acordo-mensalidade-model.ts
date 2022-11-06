import { AlunoModel } from "./aluno-model"
import { PagamentoMensalidadeModel } from "./pagamento-mensalidade-model"
import { StatusMensalidadeModel } from "./status-mensalidade-model"

export class AcordoMensalidadeModel {

    constructor() {
        this.id = 0;
        this.diaDataVencimento = 0;
        this.pagamentosMensalidades = [];
        this.idStatusMensalidade = 0;
    }

    id: number;
    diaDataVencimento: number;

    statusMensalidade!: StatusMensalidadeModel;
    aluno!: AlunoModel;

    pagamentosMensalidades: PagamentoMensalidadeModel[];

    idStatusMensalidade: number;
}
