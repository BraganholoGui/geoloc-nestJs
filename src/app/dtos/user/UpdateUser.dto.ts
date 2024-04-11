import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../../validacao/email-eh-unico.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  access_name: string;

  // @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  // @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
  // @IsOptional()
  // email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
