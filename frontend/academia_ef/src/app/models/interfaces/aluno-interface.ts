import { AcordoMensalidadeInterface } from "./acordo-mensalidade-interface";
import { AvaliacaoFisicaInterface } from "./avaliacao-fisica-interface";
import { EnderecoInterface } from "./endereco-interface";
import { PlanoInterface } from "./plano-interface";
import { SexoInterface } from "./sexo-interface";
import { TreinoInterface } from "./treino-interface";
import { UnidadeInterface } from "./unidade-interface";
import { UsuarioInterface } from "./usuario-interface";

export interface AlunoInterface {
    id: number;
    matricula: string;
    cpf: string;
    nome: string;
    email: string;
    dataNascimento: Date;
    telefone: string;
    dataMatricula: string;
    status: boolean;

    sexo: SexoInterface;
    endereco: EnderecoInterface;
    plano: PlanoInterface;
    unidade: UnidadeInterface;
    acordoMensalidade: AcordoMensalidadeInterface
    usuario: UsuarioInterface;

    treinos: TreinoInterface[];
    avaliacoesFisica: AvaliacaoFisicaInterface[];

    idAcademia: number;
    idSexo: number;
    idEndereco: number;
    idPlano: number;
    idAcordoMensalidade: number;
    idUsuario: number;
}
