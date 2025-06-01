"use client";
import ContentForm from "@/component/contents/ContentForm";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { post } from "@/lib/utils/fetch";
import { extractFormData } from "@/lib/utils/functions";
import Url from "@/lib/utils/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePostPage = () => {
    const route = useRouter();
    const [loading, setLoading] = useState(false);

    const handleContentAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const data = extractFormData(e);
        await post<APIResponse>(Api.admin.contents.main, { data });
        setLoading(false);
        route.replace(Url.admin.contents.view);
    }

    return (
        <form className="page flex flex-col gap-4" onSubmit={handleContentAdd}>
            <ContentForm loading={loading} />
        </form>
    )
}

export default CreatePostPage;