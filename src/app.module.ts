import { Module } from '@nestjs/common';
import { AgendamentoController } from './agendamento/controller/agendamento.controller';
import { AgendasController } from './agenda/controller/agenda.controller';
import { AgendamentoService } from './agendamento/service/agendamento.service';
import { AgendaService } from './agenda/service/agenda.service';
@Module({
  controllers: [AgendasController, AgendamentoController],
  providers: [AgendamentoService, AgendaService],
})
export class AppModule {}
