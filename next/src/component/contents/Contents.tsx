import { Content } from "@/lib/types/content.type";
import { Api } from "@/lib/utils/api.url";
import { get } from "@/lib/utils/fetch";
import { useEffect, useState } from "react";

const Contents = ({
    category,
    label,
    children,
}: {
    category: string;
    label: string,
    children: (content: Content) => React.ReactNode;
}) => {

    const [contents, setContents] = useState<Content[] | null>([]);

    useEffect(() => {
        const getContents = async () => {
            console.log(category);
            const result = await get<Content[]>(Api.admin.contents.get(category, 5));
            setContents(result ?? []);
        }
        getContents();
    }, [category]);

    if (!contents) return null;

    return (
        <section id={category} className="flex flex-col gap-6">
            <h1>{label}</h1>
            <div className="flex flex-col gap-4">
                {contents?.map((content) => (
                    children && children(content)
                ))}
            </div>
        </section>
    );
}

export default Contents;