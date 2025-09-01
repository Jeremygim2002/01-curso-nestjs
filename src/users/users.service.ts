import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: any[] = [
        {
            id: 1,
            nombre: 'jeremaya',
            edad: 22
        },
        {
            id: 2,
            nombre: 'maria',
            edad: 25
        }

    ];

    getUsers() {
        return this.users;
    }

    createUsers(user: CreateUserDto) {
        this.users.push(user)

        return {
            ...user,
            id: this.users.length + 1
        }

    }
}
