import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    create(createRestaurantDto: CreateRestaurantDto): Promise<import("./entities/restaurant.entity").Restaurants>;
    findAll(): Promise<import("./entities/restaurant.entity").Restaurants[]>;
    findOne(id: string): Promise<import("./entities/restaurant.entity").Restaurants>;
    update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<import("./entities/restaurant.entity").Restaurants>;
}
