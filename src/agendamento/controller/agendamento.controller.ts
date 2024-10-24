import { Controller, Post, Body } from '@nestjs/common';
import { AgendamentoService } from '../service/agendamento.service';
import { CreateAgendamentoDto } from '../dto/create-agendamento.dto';
import { AgendamentoResponseDto } from '../type/agendamento-response.dto';

@Controller('agendamento')
export class AgendamentoController {
    constructor(private readonly agendamentoService: AgendamentoService) {}

    @Post()
    async createAgendamento(@Body() createAgendamentoDto: CreateAgendamentoDto): Promise<AgendamentoResponseDto> {
        const agendamento = await this.agendamentoService.createAgendamento(createAgendamentoDto);
        
        return {
            mensagem: "Agendamento realizado com sucesso",
            agendamento,
        };
    }
}