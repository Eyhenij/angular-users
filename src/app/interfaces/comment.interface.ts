export interface IComment {
    commentUUID: string;
    parentUUID: string;
    userUUID: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface ICommentContainer {
    parentUUID: string;
    comments: IComment[];
}

export interface ICreateCommentData {
    parentUUID: string;
    userUUID: string;
    content: string;
}

export interface IUpdateCommentData {
    commentUUID: string;
    content: string;
}
