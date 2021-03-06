import { CommentUser } from "./comment-user.interface";

export interface Comment {
    user: CommentUser
    comment: string;
    comment_on: number;
}