import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAgendamentoDto {
  @IsNotEmpty()
    @IsString()
    medico_id!: number;

  @IsNotEmpty()
    @IsString()
    paciente_nome!: string;

  @IsNotEmpty()
    @IsString()
    data_horario!: string;
}
