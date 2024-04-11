import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUserDTO } from '../dtos/user/ListUser.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from '../dtos/user/UpdateUser.dto';
import { CreateUserDTO } from '../dtos/user/CreateUser.dto';
import { ContactEntity } from '../entities/contact.entity';
import { PersonEntity } from '../entities/person.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {}

  async createUser(dadosDoUser: CreateUserDTO) {
    const usuarioEntity = new UserEntity();
    const contactEntity = new ContactEntity();
    const personEntity = new PersonEntity();

    contactEntity.email = dadosDoUser.contact.email;
    contactEntity.phone = dadosDoUser.contact.phone;
    this.contactRepository.save(contactEntity);
   
    personEntity.name = dadosDoUser.person.name;
    personEntity.contact = contactEntity;
    this.personRepository.save(personEntity);

    console.log(dadosDoUser)
    usuarioEntity.senha = dadosDoUser.senha;
    usuarioEntity.access_name = dadosDoUser.access_name;
    usuarioEntity.person = personEntity;

    return this.userRepository.save(usuarioEntity);
  }

  async listUsers() {
    const usuariosSalvos = await this.userRepository.find();
    const usuariosLista = usuariosSalvos.map(
      (user) => new ListUserDTO(user.id, user.access_name),
    );
    return usuariosLista;
  }

  // async buscaPorEmail(email: string) {
  //   const checkEmail = await this.userRepository.findOne({
  //     where: { email },
  //   });
  //   return checkEmail;
  // }

  async updateUser(id: string, novosDados: UpdateUserDTO) {
    await this.userRepository.update(id, novosDados);
  }

  async deletaUser(id: string) {
    await this.userRepository.delete(id);
  }
}
