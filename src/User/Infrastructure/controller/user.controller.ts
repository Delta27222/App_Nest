import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  //Los usuarios registrados
  @Get()
  findAll() {
    return this.service.findAll();
  }

  //Un usuario en especifico
  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('userId', ParseIntPipe) userId: number) {
    // response.status(200).send({
    //   message: `product ${userId}`,
    // })
    return this.service.findOne(userId);
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // }
    return this.service.create(payload);
  }

  @Put(':userId')
  update(@Param('userId') userId: string, @Body() payload: UpdateUserDto) {
    return this.service.update(+userId, payload);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.service.remove(+userId);
  }
}
