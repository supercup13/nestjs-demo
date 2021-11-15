"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurantTable1636983643062 = void 0;
const typeorm_1 = require("typeorm");
class createRestaurantTable1636983643062 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'restaurants',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                    default: null,
                },
                {
                    name: 'address',
                    type: 'varchar',
                    default: null,
                },
                {
                    name: 'is_active',
                    type: 'tinyInt',
                    default: 1,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('restaurants');
    }
}
exports.createRestaurantTable1636983643062 = createRestaurantTable1636983643062;
//# sourceMappingURL=1636983643062-create-restaurant-table.js.map