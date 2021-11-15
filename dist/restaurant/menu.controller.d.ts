import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(createMenuDto: CreateMenuDto): Promise<import("./entities/menu.entity").Menu>;
    findAll(): Promise<import("./entities/menu.entity").Menu[]>;
    findOne(id: string): Promise<import("./entities/menu.entity").Menu>;
    update(id: string, updateMenuDto: UpdateMenuDto): Promise<import("typeorm").UpdateResult>;
}
