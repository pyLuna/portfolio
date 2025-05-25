"use client";
import Button from "@/component/ui/Button";
import Select from "@/component/ui/Select";
import TextArea from "@/component/ui/TextArea";
import TextField from "@/component/ui/TextField";
import { useCategory } from "@/hooks/useCategoryHook";

const CreatePostPage = () => {
    const categories = useCategory();

    return (
        <form className="page flex flex-col gap-4">
            <Select label="Select Category" name="category" required>
                <option value="" disabled>Choose Category</option>
                {categories.categories?.map((category) => (
                    <option key={category.code} value={category.code}>
                        {category.name}
                    </option>
                ))}
            </Select>

            <TextField label="Title" name="title" />

            <div className="flex gap-4">
                <TextField label="From" required placeholder="YYYY" name="from" />
                <TextField label="To" name="to" placeholder="YYYY" />
            </div>

            <TextArea rows={20} placeholder="Describe your work" label="Description" name="description" />

            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}

export default CreatePostPage;