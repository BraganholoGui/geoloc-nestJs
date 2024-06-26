import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'access_name', length: 100, nullable: false })
  access_name: string;

  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @OneToOne(() => PersonEntity, (person) => person.user)
  @JoinColumn()
  person: PersonEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
