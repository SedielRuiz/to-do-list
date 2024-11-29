import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/to-do-list.request'
import { ToDoListService } from '@service/to-do-list.service'
@Injectable()
export class ToDoListOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(ToDoListOperation.name)
    constructor(
        private toDoListService: ToDoListService
    ) {}

    async execute(filters: ConsultRequest): Promise<any> {
        if(filters?.finish)
            filters.finish === 'true' ? true : false

        return await this.toDoListService.all(filters)
    }

    async create(data: CreateRequest): Promise<any> {
        return await this.toDoListService.create(data)
    }

    async update(params, data: UpdateRequest): Promise<any> {
        await this.toDoListService.update(params.id, data)
        return 'Updated successfull'
    }
    async delete(id: number): Promise<any> {
        await this.toDoListService.delete(id)
        return 'Deleted successfully'
    }
}