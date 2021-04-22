import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async getAllUsers(): Promise<User []> {
        return await this.userRepository.find();
    }

    async create(userData: CreateUserDto) : Promise<void> {
        //await this.userRepository.save(userData);
    }
}
