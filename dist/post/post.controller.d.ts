/// <reference types="mongoose" />
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ListPostDto } from './dto/list-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import("../interfaces/post.interface").Post & {
        _id: any;
    }>;
    findAll(listPostDto: ListPostDto): Promise<{
        name: string;
        description: string;
        content: string;
        is_active: {
            type: boolean;
            default: true;
        };
    }[]>;
    findOne(id: string): import("mongoose").Query<import("../interfaces/post.interface").Post & {
        _id: any;
    }, import("../interfaces/post.interface").Post & {
        _id: any;
    }, {}, import("../interfaces/post.interface").Post>;
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: string): string;
}
