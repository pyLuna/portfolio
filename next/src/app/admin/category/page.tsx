"use client";
import Button from "@/component/ui/Button";
import Loading from "@/component/ui/Loading";
import TextField from "@/component/ui/TextField";
import { useCategory } from "@/hooks/useCategoryHook";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { deleteMethod, post } from "@/lib/utils/fetch";
import { CheckCircleIcon, TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";

const CategoryPage = () => {
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const categories = useCategory();

    const handleCategoryAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name") as string;
        const code = formData.get("code") as string;

        await post<APIResponse>(Api.admin.category, { data: { name, code } });
        setLoading(false);
        categories.refresh();
        alert(`Category added.`);
    }

    const handleDelete = async (code: string) => {
        if (process.env.NODE_ENV === "production") return;
        setDeleteLoading(true);
        console.log("Deleting category", code);
        await deleteMethod(Api.admin.category, { data: { code } });
        setDeleteLoading(false);
        categories.refresh();
        alert(`Category deleted.`);
    }

    return (
        <section className="page space-y-4">
            <h1>Category</h1>

            <form className="flex flex-row gap-4 justify-center" onSubmit={handleCategoryAdd}>
                <TextField name="code" placeholder="Code" />
                <TextField name="name" placeholder="Name" />
                <Button loading={loading} className="" type="submit">
                    <CheckCircleIcon />
                </Button>
            </form>

            {categories.isLoading && (
                <Loading></Loading>
            )}

            {categories && (
                <ul className="flex flex-col gap-4">
                    {categories.categories?.map((category) => (
                        <li key={category._id.toString()}
                            className="flex flex-row gap-8 justify-between">
                            <span>{category.code}</span>
                            <span>{category.name}</span>
                            <div className="flex flex-row gap-4">
                                <Button
                                    type="button"
                                    loading={deleteLoading}
                                    variant="destructive"
                                    onClick={() => handleDelete(category.code)}
                                >
                                    <TrashIcon />
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default CategoryPage;