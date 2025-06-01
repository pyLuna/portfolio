"use client";
import ContentForm from "@/component/contents/ContentForm";
import Loading from "@/component/ui/Loading";
import { Content } from "@/lib/types/content.type";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { get, patch } from "@/lib/utils/fetch";
import { extractFormData } from "@/lib/utils/functions";
import Url from "@/lib/utils/url";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useEffect, useState } from "react";

const RenderPage = () => {
    const id = useSearchParams().get("id")!;
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState<Content | undefined>(undefined);

    useEffect(() => {
        const getContent = async () => {
            const re = await get<Content>(Api.admin.contents.single(id));
            console.log("result from api", re);
            if (!re) return undefined;
            setContent(re);
        }
        getContent();
    }, [id]);


    const handleContentUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const data = extractFormData(e);
        await patch<APIResponse>(Api.admin.contents.main, {
            data: {
                _id: id,
                ...data
            }
        });
        setLoading(false);
        route.replace(Url.admin.contents.view);
    }

    return (
        <form className="page flex flex-col gap-4" onSubmit={handleContentUpdate}>
            <ContentForm loading={loading} content={content} />
        </form>
    )
}

const UpdatePage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RenderPage />
        </Suspense>
    )
}

export default UpdatePage;