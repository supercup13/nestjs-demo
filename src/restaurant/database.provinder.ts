import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
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
