import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import { medicosMock } from '../../src/agenda/mocks/medicos.mock';

describe('AgendaController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/agendas (GET)', () => {
    return request(app.getHttpServer())
      .get('/agendas')
      .expect(200)
      .expect((response) => {
        expect(response.body).toHaveProperty('medicos');
        expect(response.body.medicos).toEqual(medicosMock);
      });
  });
});
