import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator'

export class ConsultRequest {

    @ApiProperty({
        type: String,
        description: 'description',
        example: 'Code review'
    })
    @IsOptional()
    description: string

    @ApiProperty({
        type: Boolean,
        description: 'finish',
        example: true
    })
    @IsOptional()
    @IsBoolean()
    finish: boolean

}

export class CreateRequest {

    @ApiProperty({
        type: String,
        description: 'description',
        example: 'Code review'
    })
    @IsNotEmpty()
    description: string
}

export class UpdateRequest {

    @ApiProperty({
        type: String,
        description: 'description',
        example: 'Code review'
    })
    @IsNotEmpty()
    description: string

    @ApiProperty({
        type: Boolean,
        description: 'finish',
        example: true
    })
    @IsBoolean()
    finish: boolean
}