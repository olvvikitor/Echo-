import { Body, Controller, Get, Inject, Injectable, Param, Post } from '@nestjs/common';
import { IUser } from '../../domain/entities/IUser';
import { UserServices } from '../../services/user.service';

@Injectable()
@Controller('user')
export class UserControllers{
  constructor(
    @Inject()
    private userService : UserServices
  ){}

  @Post()
  public async create(@Body() user: IUser){
    return await this.userService.createUser(user)
  }
  @Get('/:id')
  public async findById(@Param('id') id:string ){
    return await this.userService.findById(id)
  }
}
