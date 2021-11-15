"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuTable1636983649878 = void 0;
const typeorm_1 = require("typeorm");
class createMenuTable1636983649878 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'menu',
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
                    name: 'restaurent_id',
                    type: 'int',
                },
                {
                    name: 'description',
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
        await queryRunner.dropTable('menu');
    }
}
exports.createMenuTable1636983649878 = createMenuTable1636983649878;
//# sourceMappingURL=1636983649878-create-menu-table.js.map