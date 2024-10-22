import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, User } from './types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'ahmad', email: 'ahmad@gmail.com', role: 'ADMIN' },
    { id: 2, name: 'abdul', email: 'abdul@gmail.com', role: 'INTERN' },
    { id: 3, name: 'siti', email: 'siti@gmail.com', role: 'INTERN' },
  ];

  getUsers(role?: Role) {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0)
        return new NotFoundException('user role not found');
      return rolesArray;
    }
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  //   createUser(user: User) {
  createUser(user: CreateUserDto) {
    const sortedUsers = this.users.sort((a, b) => b.id - a.id);
    const newId = this.users.length > 0 ? sortedUsers[0].id + 1 : 1;

    const newUser = { id: newId, ...user };
    this.users.push(newUser);
    return newUser;
  }

  //   updateUser(id: number, user: User) {
  updateUser(id: number, user: UpdateUserDto) {
    this.users = this.users.map((u) => {
      if (u.id === id) {
        return { ...u, ...user };
      }
      return u;
    });
    return this.getUserById(id);
  }

  deleteUser(id: number) {
    const removedUser = this.getUserById(id);
    this.users = this.users.filter((u) => u.id !== id);
    return removedUser;
  }
}
