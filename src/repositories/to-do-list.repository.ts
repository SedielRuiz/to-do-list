import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ToDoLists } from 'src/domain/entities/to-do-list.entity'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/to-do-list.request'
import { Repository } from 'typeorm'

@Injectable()
export class ToDoListRepository {

    constructor(
        @InjectRepository(ToDoLists)
        private toDoListRepository: Repository<ToDoLists>,
    ) {}

    async all (filter: ConsultRequest): Promise<ToDoLists[]> {
        const toDoLists: ToDoLists[] = await this.toDoListRepository.find({
            where: filter
        })

        return toDoLists
    }

    async create (data: CreateRequest): Promise<ToDoLists> {
        const toDoList: ToDoLists = await this.toDoListRepository.save(data)

        if (!toDoList)
            throw new NotFoundException(`toDoList with [body: ${JSON.stringify(data)}] not created`)

        return toDoList
    }

    async update (id: number, data: UpdateRequest): Promise<ToDoLists> {
        const toDoList: any = await this.toDoListRepository.update(id, data)

        if (!toDoList)
            throw new NotFoundException(`toDoList with [body: ${JSON.stringify(data)}] not updated`)


        return toDoList
    }

    async delete(id: number) {
        const toDoList: any = await this.toDoListRepository.delete(id)
        if (!toDoList)
            throw new NotFoundException(`toDoList with ID ${id} not found`)
    }

}
