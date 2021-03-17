import { Article } from './post.interface';

export interface Course {
    id?: string;
    title: string;
    courseImageUrl: string;
    description: string;
    created_at?: number;
    updated_at?: number;
    content: string[] | Article[];
}