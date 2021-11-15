import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurants } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurants)
    private readonly restaurentRepository: Repository<Restaurants>,
  ) {}
  create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurants> {
    const restaurents = new Restaurants();
    const resp = this.restaurentRepository.save(createRestaurantDto);
    return resp;
  }

  findAll() {
    return this.restaurentRepository.find({
      relations: ['menu'],
    });
  }

  findOne(id: number) {
    return this.restaurentRepository.findOne(id, {
      relations: ['menu'],
    });
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    const resp = this.restaurentRepository.update(id, updateRestaurantDto);
    const restaurent = this.restaurentRepository.findOne(id, {
      relations: ['menu'],
    });
    return restaurent;
  }
}
