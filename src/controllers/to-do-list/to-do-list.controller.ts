import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ToDoListOperation } from '@operation/to-do-list.operation';
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/to-do-list.request';
import { toDoList, version } from 'src/routers/routes';

@ApiTags('To do list')
@Controller(version.V1+toDoList.BASE_ROUTE)
@Controller('to-do-list')
export class ToDoListController {
    constructor(private toDoListOperation: ToDoListOperation) {}

    @Get(toDoList.ALL)
    async get(@Query() filters: ConsultRequest): Promise<Response> {
        return await this.toDoListOperation.execute(filters)
    }

    @Post(toDoList.CREATE)
    async create(@Body() request: CreateRequest): Promise<Response> {
        return await this.toDoListOperation.create(request)
    }

    @Put(toDoList.UPDATE)
    async update(@Param() params, @Body() request: UpdateRequest): Promise<Response> {
        return await this.toDoListOperation.update(params, request)
    }

    @Delete(toDoList.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.toDoListOperation.delete(params)
    }
}
