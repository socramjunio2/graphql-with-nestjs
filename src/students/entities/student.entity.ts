import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Student extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Field(() => String)
  @Column()
  cpf: String;

  @Field(() => String)
  @Column()
  name: String;

  @Field()
  @Column()
  email: String;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at?: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at?: Date;
}
