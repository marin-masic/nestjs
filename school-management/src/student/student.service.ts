import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import * as uuid from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid.v4(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  getAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  get(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  getStudents(studentIds: string[]): Promise<Student[]> {
    if (!studentIds || studentIds.length === 0) return new Promise(resolve => resolve([]));
    return Promise.all(studentIds.map((id) => this.get(id)));
  }
}
