import { DataSource } from "typeorm";

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "102030",
    database: "crud_db",
    entities: [
        './src/models/**/*.ts'
    ],
    migrations: [
        './src/migrations/**/*.ts'
    ]
})
