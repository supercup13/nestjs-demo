import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/gsg'),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'hnpro',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['src/migrations/*.ts,.js', 'dist/migrations/*.ts,.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      synchronize: true,
    }),
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
