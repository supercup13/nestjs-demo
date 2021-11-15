import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}
  create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = new Menu();
    const resp = this.menuRepository.save(createMenuDto);
    return resp;
  }

  findAll() {
    return this.menuRepository.find({
      relations: ['restaurants'],
    });
  }

  findOne(id: number) {
    return this.menuRepository.findOne(id, {
      relations: ['restaurants'],
    });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    const resp = this.menuRepository.update(id, updateMenuDto);
    return resp;
  }
}
