import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateUserDTO } from '../dtos/user/UpdateUser.dto';
import { CreateUserDTO } from '../dtos/user/CreateUser.dto';
import { ListUserDTO } from '../dtos/user/ListUser.dto';
import { UserService } from '../services/user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() dadosDoUser: CreateUserDTO) {
    const userCriado = await this.userService.createUser(dadosDoUser);

    return {
      user: new ListUserDTO(userCriado.id, userCriado.access_name),
      messagem: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listUsers() {
    const usuariosSalvos = await this.userService.listUsers();

    return usuariosSalvos;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() novosDados: UpdateUserDTO,
  ) {
    const usuarioAtualizado = await this.userService.updateUser(
      id,
      novosDados,
    );

    return {
      user: usuarioAtualizado,
      messagem: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const usuarioRemovido = await this.userService.deletaUser(id);

    return {
      user: usuarioRemovido,
      messagem: 'usuário removido com suceso',
    };
  }
}