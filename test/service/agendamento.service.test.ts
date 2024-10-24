import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoService } from './../../src/agendamento/service/agendamento.service';
import { CreateAgendamentoDto } from './../../src/agendamento/dto/create-agendamento.dto';
import { AgendamentoInterface } from './../../src/agendamento/interface/agendamento-response.interface';

describe('AgendamentoService', () => {
  let service: AgendamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamentoService],
    }).compile();

    service = module.get<AgendamentoService>(AgendamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAgendamento', () => {
    it('should create an agendamento successfully', async () => {
      const createAgendamentoDto: CreateAgendamentoDto = {
        medico_id: 1,
        paciente_nome: 'Carlos Silva',
        data_horario: '2024-10-23T10:00:00',
      };

      const result: AgendamentoInterface = await service.createAgendamento(createAgendamentoDto);

      expect(result).toEqual({
        medico: 'Dr. João Silva',
        paciente: 'Carlos Silva',
        data_horario: '2024-10-23T10:00:00',
      });
    });

    it('should handle a different medico_id', async () => {
      const createAgendamentoDto: CreateAgendamentoDto = {
        medico_id: 2,
        paciente_nome: 'Ana Pereira',
        data_horario: '2024-10-24T11:00:00',
      };

      const result: AgendamentoInterface = await service.createAgendamento(createAgendamentoDto);

      expect(result).toEqual({
        medico: 'Dr. Maria Souza',
        paciente: 'Ana Pereira',
        data_horario: '2024-10-24T11:00:00',
      });
    });
  });
});
