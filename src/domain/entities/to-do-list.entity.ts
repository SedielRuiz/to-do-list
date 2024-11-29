import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class ToDoLists extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    finish: boolean

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date
}
