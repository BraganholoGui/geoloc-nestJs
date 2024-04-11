import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUserDTO } from '../dtos/user/ListUser.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from '../dtos/user/UpdateUser.dto';
import { CreateUserDTO } from '../dtos/user/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(dadosDoUser: CreateUserDTO) {
    const usuarioEntity = new UserEntity();

    usuarioEntity.email = dadosDoUser.email;
    usuarioEntity.senha = dadosDoUser.senha;
    usuarioEntity.access_name = dadosDoUser.access_name;

    return this.userRepository.save(usuarioEntity);
  }

  async listUsers() {
    const usuariosSalvos = await this.userRepository.find();
    const usuariosLista = usuariosSalvos.map(
      (user) => new ListUserDTO(user.id, user.access_name),
    );
    return usuariosLista;
  }

  async buscaPorEmail(email: string) {
    const checkEmail = await this.userRepository.findOne({
      where: { email },
    });
    return checkEmail;
  }

  async updateUser(id: string, novosDados: UpdateUserDTO) {
    await this.userRepository.update(id, novosDados);
  }

  async deletaUser(id: string) {
    await this.userRepository.delete(id);
  }
}
