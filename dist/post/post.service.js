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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_schema_1 = require("../models/post.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_interface_1 = require("../interfaces/post.interface");
const slugify_1 = require("slugify");
let PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async create(createPostDto) {
        const slugUrl = (0, slugify_1.default)(createPostDto.name);
        createPostDto.slug = slugUrl;
        const createPost = await new this.postModel(createPostDto);
        return createPost.save();
    }
    async findAll(listPostDto) {
        console.log(listPostDto);
        const posts = await this.postModel.find().exec();
        return posts.map((prod) => ({
            name: prod.name,
            description: prod.description,
            content: prod.content,
            is_active: prod.is_active,
        }));
    }
    findOne(id) {
        return this.postModel.findById(id);
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Post')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map