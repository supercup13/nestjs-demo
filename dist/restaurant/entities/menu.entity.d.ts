import { Restaurants } from './restaurant.entity';
export declare class Menu {
    id: number;
    restaurent_id: number;
    name: string;
    is_active: boolean;
    restaurants: Restaurants;
}
