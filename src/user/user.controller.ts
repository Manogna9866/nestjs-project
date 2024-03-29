import { Body, Controller, Get, Param, Post, Put ,Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from './dto/user.dto';
import { user } from './schema/schema.dto';

@Controller('user')
export class UserController {
    constructor(private readonly api:UserService){
   
    }
    @Post()
    async create(@Body() userDto:userDto):Promise<user>{
        return this.api.create(userDto)
    }
    @Get()
  async findAll(): Promise<user[]> {
    return this.api.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<user> {
    return this.api.findOne(id);
  }


    @Put(':id')
  async update(@Param('id') id: string, @Body() userDto:userDto): Promise<user> {
    return this.api.update(id,userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.api.remove(id);
  }
}
