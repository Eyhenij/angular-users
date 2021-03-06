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
    liked?: boolean;
    disliked?: boolean;
}

export interface ICreatePostData {
    userUUID: string;
    title: string;
    content: string;
}

export interface IWasPostLiked {
    postUUID: string;
    value: boolean;
}

export interface ICurrentPosts {
    userUUID: string;
    currentPage: number;
    pageSize: number;
}


