import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  startDate: string;

  @Column()
  @Field()
  endDate: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdOn: Date;
}
