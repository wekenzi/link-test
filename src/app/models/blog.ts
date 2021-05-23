export interface Blog {
    content: string;
    description: string;
    id: number;
    publishedAt: Date | string;
    showOnHomepage: boolean
    sourceID: number
    title: string;
    urlToImage: string;
}
