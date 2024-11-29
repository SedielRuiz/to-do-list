import { DataSource } from "typeorm"
export default new DataSource({
    type: 'postgres',
    host: 'to-do-list-postgres',
    port: 5432,
    username: 'postgres',
    password: '123456789',
    database: 'to_do_list',
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ['src/domain/migrations/*{.ts,.js}']
})

