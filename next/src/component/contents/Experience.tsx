import { ArrowRightIcon } from "@phosphor-icons/react";
import Badge from "../ui/Badge";
import Contents from "./Contents";
import ContentContainer from "./ContentWrapper";

const Experience = () => {
    return (
        <Contents category="work_exp" label="Experience" >
            {(content) => (
                <ContentContainer key={content._id.toString()}>
                    <div className="flex gap-2 items-center">
                        <b>{content.position} </b>
                        -
                        <small>
                            {content.title}
                        </small>
                        {content.url && (
                            <a href={content.url} target="_blank" rel="noopener noreferrer" className="ml-auto">
                                <Badge color="secondary" className="flex gap-1">
                                    Visit <ArrowRightIcon className="w-4 h-3" />
                                </Badge>
                            </a>
                        )}
                    </div>
                    <small className="text-gray-400">
                        {content.location} ({content.from} - {content.to})
                    </small>
                    <p className="text-gray-500 text-sm mt-3">
                        {content.description}
                    </p>
                </ContentContainer>
            )}
        </Contents>
    )
}

export default Experience;