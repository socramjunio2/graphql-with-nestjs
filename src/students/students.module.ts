import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { StudentRepository } from "./students.repository";
import { StudentsResolver } from './students.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StudentRepository,
    ]),
  ],
  providers: [StudentsResolver, StudentsService]
})
export class StudentsModule {}
