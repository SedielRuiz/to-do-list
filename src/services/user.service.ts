import { Injectable } from '@nestjs/common'

export type User = any

@Injectable()
export class UserService {
    private readonly users = [
        {
            userId: 1,
            username: 'sediel',
            password: '123',
        },
        {
            userId: 2,
            username: 'maria',
            password: '123',
        },
        {
            userId: 3,
            username: 'laura',
            password: '123',
        }
    ]

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}