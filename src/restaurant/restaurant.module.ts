import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
// import { databaseProviders } from './database.provinder';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Restaurants } from './entities/restaurant.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Restaurants, Menu])],
  controllers: [RestaurantController, MenuController],
  providers: [RestaurantService, MenuService],
  // exports: [...databaseProviders],
})
export class RestaurantModule {}
