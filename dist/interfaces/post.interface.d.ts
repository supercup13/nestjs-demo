import { Document } from 'mongoose';
export interface Post extends Document {
    name: string;
    description: string;
    content: string;
    slug: string;
    is_active: {
        type: boolean;
        default: true;
    };
}
