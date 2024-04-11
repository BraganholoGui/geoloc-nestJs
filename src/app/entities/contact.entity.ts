import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity({ name: 'contact' })
export class ContactEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'phone', length: 70})
  phone: string;

  @OneToOne(() => PersonEntity, (person) => person.contact, {
    cascade: true,
  })
  person: PersonEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
