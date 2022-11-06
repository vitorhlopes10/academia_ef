import { AcordoMensalidadeModel } from "./acordo-mensalidade-model";
import { AvaliacaoFisicaModel } from "./avaliacao-fisica-model";
import { EnderecoModel } from "./endereco-model";
import { PlanoModel } from "./plano-model";
import { SexoModel } from "./sexo-model";
import { TreinoModel } from "./treino-model";
import { UnidadeModel } from "./unidade-model";
import { UsuarioModel } from "./usuario-model";

export class AlunoModel {

    constructor() {
        this.id = 0;
        this.matricula = '';
        this.cpf = '';
        this.nome = '';
        this.email = '';
        this.dataNascimento = new Date();
        this.telefone = '';
        this.dataMatricula = new Date();
        this.status = true;
        this.treinos = [];
        this.avaliacoesFisica = []
        this.idUnidade = 0;
        this.idSexo = 0;
        this.idEndereco = 0;
        this.idPlano = 0;
        this.idAcordoMensalidade = 0;
        this.idUsuario = 0;
    }

    id: number;
    matricula: string;
    cpf: string;
    nome: string;
    email: string;
    dataNascimento: Date;
    telefone: string;
    dataMatricula: Date;
    status: boolean;

    sexo!: SexoModel;
    endereco: EnderecoModel = new EnderecoModel();
    plano!: PlanoModel;
    unidade!: UnidadeModel;
    acordoMensalidade!: AcordoMensalidadeModel
    usuario!: UsuarioModel;

    treinos: TreinoModel[];
    avaliacoesFisica: AvaliacaoFisicaModel[];

    idUnidade: number;
    idSexo: number;
    idEndereco: number;
    idPlano: number;
    idAcordoMensalidade: number;
    idUsuario: number;
}
