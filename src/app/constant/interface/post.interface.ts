import { Tag } from "./tag.inteface";

export interface Article {
    type: string;
    title: string;
    content: string;
    tags: Tag[];
    comments?: Comment[];
}