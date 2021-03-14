import { PostType } from '../enum/post.enum';
import { Tag } from './tag.inteface';

export interface Article {
    id?: string;
    type: PostType;
    title: string;
    description: string;
    postImageUrl?: string;
    content: string;
    tags: Tag[];
    comments?: Comment[];
    created_at?: number;
    updated_at?: number;
}