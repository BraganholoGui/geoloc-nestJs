import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../../validacao/email-eh-unico.validator';
import { PersonEntity } from 'src/app/entities/person.entity';
import { ContactEntity } from 'src/app/entities/contact.entity';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  access_name: string;

  // @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  // @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
  // email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  contact: ContactEntity;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  person: PersonEntity;
}
