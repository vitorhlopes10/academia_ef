import { AvaliacaoFisicaModel } from "./avaliacao-fisica-model";
import { CargoModel } from "./cargo-model";
import { EnderecoModel } from "./endereco-model";
import { PagamentoMensalidadeModel } from "./pagamento-mensalidade-model";
import { SexoModel } from "./sexo-model";
import { TreinoModel } from "./treino-model";
import { UnidadeModel } from "./unidade-model";
import { UsuarioModel } from "./usuario-model";

export class FuncionarioModel {
    
    constructor() {
        this.id = 0;
        this.matricula = '';
        this.cpf = '';
        this.nome = '';
        this.email = '';
        this.fixo = false;
        this.dataNascimento = new Date();
        this.telefone = '';
        this.status = false;
        this.treinos = [];
        this.avaliacoesFisica = [];
        this.pagamentosMensalidades = [];
        this.idSexo = 0;
        this.idEndereco = 0;
        this.idUsuario = 0;
        this.idCargo = 0;
        this.idUnidade = 0;
    }

    id: number;
    matricula: string;
    cpf: string;
    nome: string;
    email: string;
    fixo: boolean;
    dataNascimento: Date;
    telefone: string;
    status: boolean;

    sexo!: SexoModel;
    endereco: EnderecoModel = new EnderecoModel();
    unidade!: UnidadeModel;
    usuario: UsuarioModel = new UsuarioModel();
    cargo!: CargoModel;

    treinos: TreinoModel[];
    avaliacoesFisica: AvaliacaoFisicaModel[];
    pagamentosMensalidades: PagamentoMensalidadeModel[];

    idSexo: number;
    idEndereco: number;
    idUsuario: number;
    idCargo: number;
    idUnidade?: number;
}
