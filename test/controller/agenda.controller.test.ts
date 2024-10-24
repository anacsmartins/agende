import { Test, TestingModule } from '@nestjs/testing';
import { AgendasController } from '../../src/agenda/controller/agenda.controller'; 
import { AgendaService } from '../../src/agenda/service/agenda.service';
import { medicosMock } from '../../src/agenda/mocks/medicos.mock';

describe('AgendaController', () => {
  let controller: AgendasController;
  let service: AgendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendasController],
      providers: [
        {
          provide: AgendaService,
          useValue: {
            getAgendas: jest.fn().mockResolvedValue(medicosMock),
          },
        },
      ],
    }).compile();

    controller = module.get<AgendasController>(AgendasController);
    service = module.get<AgendaService>(AgendaService);
  });

  it('Should return agendas', async () => {
    const result = await controller.getAgendas();
    expect(result).toEqual({ medicos: medicosMock });
  });
});
