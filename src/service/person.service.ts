import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entity/person.entity';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private usersRepository: Repository<Person>,
  ) {}

  findAll(): Promise<Person[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Person> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }

  async add(person: Person): Promise<InsertResult> {
    return await this.usersRepository.insert(person);
  }

  async update(id: number[], person: Person) {
    return await this.usersRepository.update(id, person);
  }
}
