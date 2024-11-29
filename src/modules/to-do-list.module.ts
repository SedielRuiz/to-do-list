import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ToDoListOperation } from '@operation/to-do-list.operation'
import { ToDoListRepository } from '@repository/to-do-list.repository'
import { ToDoListService } from '@service/to-do-list.service'
import { ToDoListController } from 'src/controllers/to-do-list/to-do-list.controller'
import { ToDoLists } from 'src/domain/entities/to-do-list.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ToDoLists
        ]),
    ],
    controllers: [ToDoListController],
    providers: [
        ToDoListOperation,
        ToDoListService,
        ToDoListRepository
    ],
    exports: [TypeOrmModule]
})
export class ToDoListModule {}
