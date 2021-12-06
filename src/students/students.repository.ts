import { EntityRepository, Repository, ILike } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { BadRequestException } from '@nestjs/common';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
    async createStudent(
        createStudentInput: CreateStudentInput
    ) {
        await this.validStudent(createStudentInput);
        const studentCreate = this.create(createStudentInput);
        return await studentCreate.save();
    }

    async updateStudent(
        id: string, updateStudentInput: UpdateStudentInput
    ) {        
        return await this.update(id, updateStudentInput as {name, cpf, email});
    }

    async listStudents(name?: string) {
        return await this.find({
            where: [{
                name: ILike(`%${name || ''}%`)
            }],
            order: { name: 'ASC' }
          });
    }

    async getStudentByFilter(filter: any) {
        return await this.findOne({
            where: [{
              email: filter,
            }, {
              cpf: filter,
            }]
          });
    }

    async getStudent(id: string) {
        return await this.findOne(id);
    }

    private async validStudent(createStudentInput: CreateStudentInput, isUpdate?: false) {
        const studentEmail = await this.findOne({
            email: createStudentInput.email,
        });
        if (studentEmail) throw new BadRequestException(['E-mail already exists in database']);

        const studentCpf = await this.findOne({
            cpf: createStudentInput.cpf,
        });
        if (studentCpf) throw new BadRequestException(['CPF already exists in database']);
    }
}
