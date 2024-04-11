import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ContactEntity } from './contact.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'person' })
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;
  
  @OneToOne(() => ContactEntity, (contact) => contact.person)
  @JoinColumn()
  contact: ContactEntity;

  @OneToOne(() => UserEntity, (user) => user.person)
  user: UserEntity;
 
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
