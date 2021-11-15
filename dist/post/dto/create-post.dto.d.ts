export declare class CreatePostDto {
    name: string;
    description: string;
    content: string;
    slug: string;
    readonly image: string;
    readonly isActive: {
        type: boolean;
        default: true;
    };
}
