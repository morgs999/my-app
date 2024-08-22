import { createClient, groq } from "next-sanity";
import { Project } from "@/types/project";


export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: 'iqewa31y',
        dataset: 'production',
        apiVersion: '2024-08-19',
    });

    return client.fetch(
        groq`*[ _type == "project" ]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}