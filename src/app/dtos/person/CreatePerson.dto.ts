import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../../validacao/email-eh-unico.validator';
import { PersonEntity } from '../../entities/person.entity';
import { ContactEntity } from '../../entities/contact.entity';

export class PersonCreateDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

}
