import { ArrowRightIcon } from "@phosphor-icons/react";
import Badge from "../ui/Badge";
import Contents from "./Contents";
import ContentContainer from "./ContentWrapper";

const Education = () => {
    return (
        <Contents category="educ" label="Education" reverse>
            {(content) => (
                <ContentContainer key={content._id.toString()}>
                    <div className="flex gap-2 items-center">
                        <b>{content.title} </b>
                        <small>
                            ({content.from} - {content.to})
                        </small>
                        {content.url && (
                            <a href={content.url} target="_blank" rel="noopener noreferrer" className="ml-auto">
                                <Badge color="secondary" className="flex gap-1">
                                    Visit <ArrowRightIcon className="w-4 h-3" />
                                </Badge>
                            </a>
                        )}
                    </div>
                    <small className="text-gray-400">{content.position}</small>
                </ContentContainer>
            )}
        </Contents>
    )
}

export default Education;