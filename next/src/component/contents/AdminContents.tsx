import { useContent } from "@/hooks/useContentHook"
import Url from "@/lib/utils/url"
import Link from "next/link"
import Icon from "../ui/Icon"
import Loading from "../ui/Loading"

const AdminContents = ({ selectedCategory }: { selectedCategory?: string }) => {
    const { contents, isLoading, isError } = useContent(selectedCategory);

    { isLoading && <Loading /> }
    { isError && <p>Error fetching contents</p> }
    { !contents?.length && !isLoading && !isError && <small>No contents</small> }
    return (
        <div className="flex flex-col gap-4">
            {contents?.map((content) => (
                <Link
                    className="flex justify-between"
                    key={content._id.toString()}
                    href={`${Url.admin.contents.update(content._id)}`}>
                    <div className="flex flex-col">
                        <p className="flex gap-4 items-center">
                            {content.icon && <Icon name={content.icon} />}
                            <b>{content.title}</b>
                        </p>
                        <small className="flex gap-2">
                            {content.from && content.to && `${content.from} - ${content.to}`}
                            <span className="text-gray-400">
                                {content.position && `(${content.position})`}
                            </span>
                        </small>
                    </div>
                    <small className="text-gray-400">{new Date(content?.created_at).toLocaleString()}</small>
                </Link>
            ))}
        </div>
    )
}

export default AdminContents