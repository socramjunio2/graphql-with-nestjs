import { StudentRepository } from './students.repository';
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}
  
  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    return this.studentRepository.createStudent(createStudentInput);
  }

  async findAll(name?: string) {
    return this.studentRepository.listStudents(name);
  }

  async findOne(id: string) {
    return this.studentRepository.getStudent(id);
  }

  async findOneByFilter(filter: string) {
    return this.studentRepository.getStudentByFilter(filter);
  }

  async update(id: string, updateStudentInput: UpdateStudentInput) {
    return this.studentRepository.updateStudent(id, updateStudentInput);
  }

  async remove(id: string) {
    return this.studentRepository.delete(id);
  }
}
