"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456789',
            database: 'test_hn',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: ['src/migrations/*.ts', 'dist/migrations/*{.ts,.js}'],
            cli: {
                migrationsDir: 'src/migrations',
            },
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.provinder.js.map