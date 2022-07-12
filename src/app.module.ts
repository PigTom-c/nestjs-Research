import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entity/person.entity';
import { AppController } from './app.controller';
import { CatsController } from './controller/cats/cats.controller';
import { catsResponseController } from './controller/cats/cats-response.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'testmysql',
      entities: [Person],
      synchronize: true,
      retryAttempts: 10,
      retryDelay: 3000,
      autoLoadEntities: false,
    }),
    UsersModule,
  ],
  controllers: [AppController, CatsController, catsResponseController],
  providers: [AppService],
})
export class AppModule {}
