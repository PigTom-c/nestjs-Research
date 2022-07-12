import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Person } from '../entity/person.entity';
import { PersonService } from '../service/person.service';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('all')
  async findAll(): Promise<Person[]> {
    let all = await this.personService.findAll();
    return all;
  }

  @Get('findById')
  async findOne(@Param('id') id: number): Promise<Person> {
    let person = await this.personService.findOne(id);
    return person;
  }

  @Post('add')
  async addPerson(@Body() person: Person): Promise<InsertResult> {
    return await this.personService.add(person);
  }

  @Delete(':id')
  async deletePerson(@Param('id') id: string): Promise<DeleteResult> {
    console.log(id);
    return await this.personService.remove(id);
  }

  @Put('update')
  async updatePerson(
    @Body('ids') ids: number[],
    @Body('person') person: Person,
  ) {
    return await this.personService.update(ids, person);
  }
}
