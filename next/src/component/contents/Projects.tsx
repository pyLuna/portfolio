import Badge from "../ui/Badge";
import Contents from "./Contents";
import ContentContainer from "./ContentWrapper";

const Projects = () => {
    return (
        <Contents category="projects" label="Projects">
            {(content) => (
                <ContentContainer className="gap-1" key={content._id.toString()}>
                    <div className="flex gap-2">
                        <b>{content.title} </b>
                        <Badge color={content.position === "Completed" ? "primary" : "secondary"}>
                            {content.position}
                        </Badge>

                        {content.url && (
                            <a href={content.url} target="_blank" rel="noopener noreferrer" className="ml-auto underline text-primary-500 text-sm">
                                View
                            </a>
                        )}
                    </div>
                    <small className="text-gray-400">{content.description}</small>
                </ContentContainer>
            )}
        </Contents>
    )
}

export default Projects;