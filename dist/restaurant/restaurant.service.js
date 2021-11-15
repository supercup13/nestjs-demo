"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const restaurant_entity_1 = require("./entities/restaurant.entity");
let RestaurantService = class RestaurantService {
    constructor(restaurentRepository) {
        this.restaurentRepository = restaurentRepository;
    }
    create(createRestaurantDto) {
        const restaurents = new restaurant_entity_1.Restaurants();
        const resp = this.restaurentRepository.save(createRestaurantDto);
        return resp;
    }
    findAll() {
        return this.restaurentRepository.find({
            relations: ['menu'],
        });
    }
    findOne(id) {
        return this.restaurentRepository.findOne(id, {
            relations: ['menu'],
        });
    }
    update(id, updateRestaurantDto) {
        const resp = this.restaurentRepository.update(id, updateRestaurantDto);
        const restaurent = this.restaurentRepository.findOne(id, {
            relations: ['menu'],
        });
        return restaurent;
    }
};
RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurant_entity_1.Restaurants)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestaurantService);
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant.service.js.map