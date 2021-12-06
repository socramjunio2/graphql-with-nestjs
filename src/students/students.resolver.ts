import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation(() => Student)
  async createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput): Promise<any> {
    return this.studentsService.create(createStudentInput);
  }

  @Query(() => [Student], { name: 'students' })
  findAll(@Args('name', { type: () => String }) name?: string) {
    return this.studentsService.findAll(name);
  }

  @Query(() => Student, { name: 'studentFilter' })
  findOneByFilter(@Args('filter', { type: () => String }) filter: string) {
    return this.studentsService.findOneByFilter(filter);
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.studentsService.findOne(id);
  }

/*   @Mutation(() => Student)
  updateStudent(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
    return this.studentsService.update(updateStudentInput.id, updateStudentInput);
  } */

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => String }) id: string) {
    return this.studentsService.remove(id);
  }
}
