import { AgendamentoInterface } from "../interface/agendamento-response.interface";

export type AgendamentoResponseDto = {
    mensagem: string;
    agendamento: AgendamentoInterface;
};