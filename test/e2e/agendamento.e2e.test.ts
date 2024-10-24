import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import { CreateAgendamentoDto } from '../../src/agendamento/dto/create-agendamento.dto';

describe('AgendamentoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/agendamento (POST)', () => {
    const agendamentoData: CreateAgendamentoDto = {
      medico_id: 1,
      paciente_nome: 'João da Silva',
      data_horario: '2024-10-25T10:00:00Z',
    };

    return request(app.getHttpServer())
      .post('/agendamento')
      .send(agendamentoData)
      .expect(201)
      .expect((response) => {
        expect(response.body).toHaveProperty('mensagem', 'Agendamento realizado com sucesso');
        expect(response.body.agendamento).toEqual({
          medico: 'Dr. João Silva',
          paciente: 'João da Silva',
          data_horario: '2024-10-25T10:00:00Z',
        });
      });
  });
});
