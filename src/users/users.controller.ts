import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { Role, User } from './types';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Get() // /
  // getUsers() {
  //   return [];
  // }

  @Get()
  getUsers(@Query('role') role?: Role) {
    return this.usersService.getUsers(role);
  }

  // 'intern' harus di atas ':id'
  // @Get('intern')
  // getUserIntern() {
  //   return [];
  // }

  // @Get(':id')
  // getUserById(@Param('id') id: string) {
  //   return this.usersService.getUserById(+id);
  // }

  // change with ParseIntPipe
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  // createUser(@Body() user: User) {
  createUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  // @Patch(':id')
  // updateUser(@Param('id') id: string, @Body() user: User) {
  //   return this.usersService.updateUser(+id, user);
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  //   return this.usersService.deleteUser(+id);
  // }

  // change with ParseIntPipe
  @Patch(':id')
  // updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: User) {
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
