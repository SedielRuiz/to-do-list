import { Injectable, Logger } from '@nestjs/common'
import { ToDoListRepository } from '@repository/to-do-list.repository';
import { ToDoLists } from 'src/domain/entities/to-do-list.entity';
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/to-do-list.request';

@Injectable()
export class ToDoListService {
    private readonly logger = new Logger(ToDoListService.name);

    constructor(private toDoListRepository: ToDoListRepository) {}

    async all (filter: ConsultRequest): Promise<ToDoLists[]> {
        return await this.toDoListRepository.all(filter)
    }

    async create (data: CreateRequest): Promise<ToDoLists> {
        return await this.toDoListRepository.create(data)
    }

    async update (id: number, data: UpdateRequest): Promise<ToDoLists> {
        return await this.toDoListRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.toDoListRepository.delete(id)
    }
}
