import { Tag } from './tag.inteface';

export interface Article {
    id?: string,
    type: string;
    title: string;
    description: string;
    postImageUrl?: string;
    content: string;
    tags: Tag[];
    comments?: Comment[];
}