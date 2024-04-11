import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { EmailEhUnicoValidator } from '../validacao/email-eh-unico.validator';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, EmailEhUnicoValidator],
})
export class UserModule {}