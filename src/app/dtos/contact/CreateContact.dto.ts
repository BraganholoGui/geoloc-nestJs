import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDTO {
  @IsString({ message: 'O telefone deve ser uma string' })
  @IsNotEmpty({ message: 'O telefone não pode ser vazio' })
  phone: string;

  @IsString({ message: 'O email deve ser uma string' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;
}
