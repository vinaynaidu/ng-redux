export interface IWorkbook {
    id: number;
    description: string;
    name: string;
    thumbnailUrl: string;
    url: string;

    isLiked: boolean;
    isStarred: boolean;

    likes: number;

    labels: string[];
    comments: Comment[];
}
