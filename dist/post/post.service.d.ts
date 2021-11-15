import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { Post } from 'src/interfaces/post.interface';
import { ListPostDto } from './dto/list-post.dto';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<Post>);
    create(createPostDto: CreatePostDto): Promise<Post & {
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
    findOne(id: string): import("mongoose").Query<Post & {
        _id: any;
    }, Post & {
        _id: any;
    }, {}, Post>;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
