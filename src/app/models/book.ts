export interface Book {
    id: number
    title: string;
    author: string;
    content: string;
    cover: string;
    genre: string;
    rating: number;
    reviews: Review[];
}
export interface ShortBookInfo {
    id: number
    title: string;
    author: string;
    content: string;
    cover: string;
    genre: string;
    rating: number;
    reviewsNumber: number;
}
export interface CreateBook{
    title: string;
    author: string;
    content: string;
    cover: string;
    genre: string;
}
export interface UpdateBook{
    id: number;
    title: string;
    author: string;
    content: string;
    cover: string;
    genre: string;
}
interface Review{
    id: number;
    message: string;
    bookId: number;
    reviewer: string;
}
