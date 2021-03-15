export interface IPost {
    postUUID: string;
    userUUID: string;
    title: string;
    content: string;
    countOfLikes: number;
    countOfDislikes: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface ICreatePostData {
    userUUID: string;
    title: string;
    content: string;
}
