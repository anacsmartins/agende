import { Test, TestingModule } from '@nestjs/testing';
import { AgendaService } from '../../src/agenda/service/agenda.service';
import { medicosMock } from '../../src/agenda/mocks/medicos.mock';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaService],
    }).compile();

    service = module.get<AgendaService>(AgendaService);
  });

  it('deve retornar a lista de médicos', async () => {
    const result = await service.getAgendas();
    expect(result).toEqual(medicosMock); // Verifica se o retorno é igual ao mock
    expect(result.length).toBe(medicosMock.length); // Verifica se a quantidade está correta
  });
});
