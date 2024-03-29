import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule,MongooseModule.forRoot("mongodb://localhost:27017/pratice")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
