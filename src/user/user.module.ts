import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/schema.dto';

@Module({
  imports:[MongooseModule.forFeature([{ name:'user',schema:userSchema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {
            
}
