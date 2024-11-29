import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
dotenv.config()

export default new DataSource({
    type: 'postgres',
    host: process.env.db_host,
    port: parseInt(process.env.db_port),
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ['src/domain/migrations/*{.ts,.js}']
})

