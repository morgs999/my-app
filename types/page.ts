import { PortableTextBlock } from "sanity";


export type Page = {
    _id: string;
    _creeatedAt: Date;
    title: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}