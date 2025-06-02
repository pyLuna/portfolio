"use client";
import AdminContents from "@/component/contents/AdminContents";
import CategoryPicker from "@/component/contents/CategoryPicker";
import Url from "@/lib/utils/url";
import Link from "next/link";
import { useState } from "react";

const ContentsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    return (
        <section className="page space-y-6">
            <article className="flex justify-between">
                <h1>Contents</h1>
                <Link className="button" href={Url.admin.contents.create}>Create New</Link>
            </article>
            <CategoryPicker selected={selectedCategory} onSelect={(v) => setSelectedCategory(v)} />
            <AdminContents selectedCategory={selectedCategory} />
        </section>
    )
}

export default ContentsPage;