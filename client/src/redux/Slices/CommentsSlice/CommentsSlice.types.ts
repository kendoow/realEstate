export interface CommentsStateTypes {
    productId: string | null,
    comments: IComment[],
    loading: boolean,
    error: string | null,
}

export interface IComment {
    _id: string,
    name: string,
    date: string,
    image: string,
    text: string,
}

export interface PaginationCommentsTypes {
    id: string | undefined,
    page: number,
    limit: number,
}