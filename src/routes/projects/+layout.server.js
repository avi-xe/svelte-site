import { projects } from "./data";

export function load() {
    return {
        summaries: projects.map((project) => ({
            slug: project.slug,
            title: project.title
        }))
    };
}