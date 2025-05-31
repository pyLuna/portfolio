"use client";
import Badge from "@/component/ui/Badge";
import Loading from "@/component/ui/Loading";
import { useContent } from "@/hooks/useContentHook";
import Url from "@/lib/utils/url";
import Link from "next/link";

const ContentsPage = () => {

    const { contents, isLoading, isError } = useContent();

    return (
        <section className="page">
            <article className="flex justify-between mb-8">
                <h1>Contents</h1>
                <Link className="button" href={Url.admin.contents.create}>Create New</Link>
            </article>

            {isLoading && <Loading />}
            {isError && <p>Error fetching contents</p>}
            {!contents?.length && !isLoading && !isError && <small>No contents</small>}

            <div className="flex flex-col gap-4">
                {contents?.map((content) => (
                    <Link
                        key={content._id.toString()}
                        href={`${Url.admin.contents.update(content._id)}`}>
                        <div className="flex flex-col">
                            <p className="flex gap-4">
                                <b>{content.title}</b>
                                <Badge>{content.category}</Badge>
                            </p>
                            <small>{content.from} - {content.to}</small>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    )
}

export default ContentsPage;