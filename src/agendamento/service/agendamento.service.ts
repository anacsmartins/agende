import { Injectable } from '@nestjs/common';
import { CreateAgendamentoDto } from '../dto/create-agendamento.dto';
import { AgendamentoInterface } from '../interface/agendamento-response.interface';

@Injectable()
export class AgendamentoService {
    async createAgendamento(createAgendamentoDto: CreateAgendamentoDto): Promise<AgendamentoInterface> {
        const { medico_id, paciente_nome, data_horario } = createAgendamentoDto;
        const medico: string = `Dr. ${medico_id === 1 ? "João Silva" : "Maria Souza"}`;

        return {
            medico,
            paciente: paciente_nome,
            data_horario,
        };
    }
}
