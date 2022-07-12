import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../entity/person.entity'
import { PersonService } from '../service/person.service'
import { PersonController } from "../controller/person.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonService],
  controllers: [PersonController],
})
export class UsersModule {}
