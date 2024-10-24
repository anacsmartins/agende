import { Injectable } from '@nestjs/common';
import { medicosMock } from '../mocks/medicos.mock';
import { MedicoInterface } from '../interface/medico.interface';

@Injectable()
export class AgendaService {
    public async getAgendas(): Promise<Array<MedicoInterface>>{
    return medicosMock;
  }
}