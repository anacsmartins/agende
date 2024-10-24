import { Controller, Get } from '@nestjs/common';
import { AgendaService } from '../service/agenda.service';
import { AgendaInterface } from '../interface/agenda.interface';

@Controller('agendas')
export class AgendasController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  public async getAgendas(): Promise<AgendaInterface> {
    const medicos = await this.agendaService.getAgendas();
    return { medicos };
  }
}
