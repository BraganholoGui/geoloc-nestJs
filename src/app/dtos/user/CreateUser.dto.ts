import { IsEmail, IsNotEmpty, MinLength, ValidateNested } from 'class-validator';
import { EmailEhUnico } from '../../validacao/email-eh-unico.validator';
import { PersonEntity } from 'src/app/entities/person.entity';
import { ContactEntity } from 'src/app/entities/contact.entity';
import {CreateContactDTO} from '../contact/CreateContact.dto'
import { PersonCreateDTO } from '../person/CreatePerson.dto';
import { Type } from 'class-transformer';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  access_name: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string;

  @ValidateNested()
  @Type(() => CreateContactDTO)
  contact: CreateContactDTO;

  @ValidateNested()
  @Type(() => PersonCreateDTO)
  person: PersonCreateDTO;
}
