import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurants } from './entities/restaurant.entity';
export declare class RestaurantService {
    private readonly restaurentRepository;
    constructor(restaurentRepository: Repository<Restaurants>);
    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurants>;
    findAll(): Promise<Restaurants[]>;
    findOne(id: number): Promise<Restaurants>;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurants>;
}
