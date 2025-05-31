"use client";
import Button from "@/component/ui/Button";
import Select from "@/component/ui/Select";
import TextArea from "@/component/ui/TextArea";
import TextField from "@/component/ui/TextField";
import { useCategory } from "@/hooks/useCategoryHook";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { post } from "@/lib/utils/fetch";
import { extractFormData } from "@/lib/utils/functions";
import Url from "@/lib/utils/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePostPage = () => {
    const categories = useCategory();
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
            <Select label="Select Category" name="category" required>
                <option value="" className="bg-background" disabled>Choose Category</option>
                {categories.categories?.map((category) => (
                    <option key={category.code} className="bg-background" value={category.code}>
                        {category.name}
                    </option>
                ))}
            </Select>

            <TextField label="Location" name="location" />
            <TextField label="Title" name="title" />
            <TextField label="Position" name="position" />

            <div className="flex gap-4">
                <TextField label="From" required placeholder="YYYY" name="from" />
                <TextField label="To" name="to" placeholder="YYYY" />
            </div>

            <TextArea rows={20} placeholder="Describe your work" label="Description" name="description" />

            <Button type="submit" loading={loading}>
                Submit
            </Button>
        </form>
    )
}

export default CreatePostPage;