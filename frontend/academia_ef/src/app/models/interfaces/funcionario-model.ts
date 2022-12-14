import { AvaliacaoFisicaInterface } from "./avaliacao-fisica-interface";
import { CargoInterface } from "./cargo-interface";
import { EnderecoInterface } from "./endereco-interface";
import { PagamentoMensalidadeInterface } from "./pagamento-mensalidade-interface";
import { PatrimonioInterface } from "./patrimonio-interface";
import { SexoInterface } from "./sexo-interface";
import { TreinoInterface } from "./treino-interface";
import { UnidadeInterface } from "./unidade-interface";
import { UsuarioInterface } from "./usuario-interface";

export interface FuncionarioInterface {
    id: number;
    matricula: string;
    cpf: string;
    nome: string;
    email: string;
    fixo: boolean;
    dataNascimento: Date;
    telefone: string;
    status: boolean;

    sexo: SexoInterface;
    endereco: EnderecoInterface;
    unidade: UnidadeInterface;
    usuario: UsuarioInterface;
    cargo: CargoInterface;

    treinos: TreinoInterface[];
    avaliacoesFisica: AvaliacaoFisicaInterface[];
    pagamentosMensalidades: PagamentoMensalidadeInterface[];
    patrimonio: PatrimonioInterface[];

    idSexo: number;
    idEndereco: number;
    idUsuario: number;
    idCargo: number;
    idUnidade: number;
}
