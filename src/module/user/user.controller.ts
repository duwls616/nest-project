import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/list')
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    create(@Body() userData: CreateUserDto) {
        return this.userService.create(userData);
    }
}
