import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Restaurants } from './restaurant.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restaurent_id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  is_active: boolean;

  @ManyToOne(() => Restaurants, (restaurants) => restaurants.menu)
  @JoinColumn({ name: 'restaurent_id' })
  restaurants: Restaurants;
}
