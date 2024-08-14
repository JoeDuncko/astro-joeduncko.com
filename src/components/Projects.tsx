import { projects } from "../data/projects";
import { DataCard } from "./DataCard.astro";
import { ExternalLink } from "./ExternalLink.astro";

export function Projects() {
    return (
        <DataCard title="Select Projects">
            <ul>
                {projects.map((project) => (
                    <li key={project.name} className="mb-2">
                        <ExternalLink
                            href={project.link}
                            title={`To ${project.name}`}
                        >
                            <h4 className="inline">{project.name}</h4>
                        </ExternalLink>
                        , {project.description}
                        <div className="hidden print:block">
                            <i>{project.link}</i>
                        </div>
                    </li>
                ))}
            </ul>
        </DataCard>
    );
}
