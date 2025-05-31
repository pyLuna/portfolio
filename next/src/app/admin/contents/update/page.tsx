"use client";
import Button from "@/component/ui/Button";
import Select from "@/component/ui/Select";
import TextArea from "@/component/ui/TextArea";
import TextField from "@/component/ui/TextField";
import { useCategory } from "@/hooks/useCategoryHook";
import { Content } from "@/lib/types/content.type";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { get, patch } from "@/lib/utils/fetch";
import { extractFormData } from "@/lib/utils/functions";
import Url from "@/lib/utils/url";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const UpdatePage = () => {
    const id = useSearchParams().get("id");
    const categories = useCategory();
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState<Content | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        if (!id) return;
        const getContent = async () => {
            const re = await get<Content>(Api.admin.contents.single(id));
            console.log("result from api", re);
            if (!re) return null;
            setContent(re);
            setSelectedCategory(re.category);
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
            <Select
                label="Category"
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required>
                <option value="" className="bg-background" disabled>Choose Category</option>
                {categories.categories?.map((category) => (
                    <option key={category.code} className="bg-background" value={category.code}>
                        {category.name}
                    </option>
                ))}
            </Select>

            <TextField label="Location" defaultValue={content?.location} name="location" />
            <TextField label="Title" defaultValue={content?.title} name="title" />
            <TextField label="Position/Status" defaultValue={content?.position} name="position" />

            <div className="flex gap-4">
                <TextField label="From" defaultValue={content?.from} placeholder="YYYY" name="from" />
                <TextField label="To" defaultValue={content?.to} name="to" placeholder="YYYY" />
            </div>

            <TextArea rows={20} defaultValue={content?.description} placeholder="Describe your work" label="Description" name="description" />

            <Button type="submit" loading={loading}>
                Submit
            </Button>
        </form>
    )
}

export default UpdatePage;