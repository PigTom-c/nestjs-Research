import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './controller/cats/cats.controller';
import { catsResponseController } from './controller/cats/cats-response.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, catsResponseController],
  providers: [AppService],
})
export class AppModule {}
