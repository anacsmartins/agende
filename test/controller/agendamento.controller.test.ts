import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoController } from './../../src/agendamento/controller/agendamento.controller';
import { AgendamentoService } from './../../src/agendamento/service/agendamento.service';
import { CreateAgendamentoDto } from './../../src/agendamento/dto/create-agendamento.dto';
import { AgendamentoResponseDto } from './../../src/agendamento/type/agendamento-response.dto';

describe('AgendamentoController', () => {
  let controller: AgendamentoController;
  let service: AgendamentoService;

  const mockAgendamentoService = {
    createAgendamento: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendamentoController],
      providers: [
        {
          provide: AgendamentoService,
          useValue: mockAgendamentoService,
        },
      ],
    }).compile();

    controller = module.get<AgendamentoController>(AgendamentoController);
    service = module.get<AgendamentoService>(AgendamentoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createAgendamento', () => {
    it('should return success message and agendamento', async () => {
      const createAgendamentoDto: CreateAgendamentoDto = {
        medico_id: 1,
        paciente_nome: 'Carlos Silva',
        data_horario: '2024-10-23T10:00:00',
      };

      const result = {
        medico: 'Dr. João Silva',
        paciente: 'Carlos Silva',
        data_horario: '2024-10-23T10:00:00',
      };

      mockAgendamentoService.createAgendamento.mockResolvedValue(result);

      const response: AgendamentoResponseDto = await controller.createAgendamento(createAgendamentoDto);

      expect(response).toEqual({
        mensagem: "Agendamento realizado com sucesso",
        agendamento: result,
      });
    });
  });
});
