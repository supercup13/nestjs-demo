import { type } from 'os';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Menu } from './menu.entity';

@Entity()
export class Restaurants {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ default: null })
  address: string;

  @Column({ default: true })
  is_active: boolean;

  @Column('text')
  description: string;

  @OneToMany((type) => Menu, (menu) => menu.restaurants)
  menu: Menu[];
}
