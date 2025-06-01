import { useCategory } from "@/hooks/useCategoryHook";
import { Content } from "@/lib/types/content.type";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";
import TextField from "../ui/TextField";

const ContentForm = ({
    loading,
    content
}: {
    loading?: boolean;
    content?: Content
}) => {
    const categories = useCategory();
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        if (content) setSelectedCategory(content.category);
    }, [content]);
    return (
        <>
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
            <TextField label="Link" defaultValue={content?.url} name="url" />

            <div className="flex gap-4">
                <TextField label="From" defaultValue={content?.from} placeholder="YYYY" name="from" />
                <TextField label="To" defaultValue={content?.to} name="to" placeholder="YYYY" />
            </div>

            <TextArea rows={20} defaultValue={content?.description} placeholder="Describe your work" label="Description" name="description" />

            <Button type="submit" loading={loading}>
                Submit
            </Button>
        </>
    )
}

export default ContentForm;