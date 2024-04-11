import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { EmailEhUnicoValidator } from '../validacao/email-eh-unico.validator';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';
import { PersonEntity } from '../entities/person.entity';
import { ContactEntity } from '../entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PersonEntity, ContactEntity])],
  controllers: [UserController],
  providers: [UserService, EmailEhUnicoValidator],
})
export class UserModule {}
