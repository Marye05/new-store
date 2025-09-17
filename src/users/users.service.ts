import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'Alice',
            phone: '123-456-7890'
        },
        {
            id: 2,
            name: 'Bob',
            phone: '987-654-3210'
        },
        {
            id: 3,
            name: 'Charlie',
            phone: '555-555-5555'
        }
    ];

    getUsers() {
        return this.users;
    }
}
