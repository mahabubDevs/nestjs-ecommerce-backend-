import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'config'
import {AllExceptionalFilter} from './httpExcepsonalFilter'
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongoURI')),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionalFilter
    }
  ],
})
export class AppModule {}
