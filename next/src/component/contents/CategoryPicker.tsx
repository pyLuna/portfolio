import { useCategory } from "@/hooks/useCategoryHook";
import Button from "../ui/Button";
import Loading from "../ui/Loading";

const CategoryPicker = ({
    onSelect,
    selected,
}: {
    onSelect: (category: string) => void;
    selected?: string;
}) => {
    const categories = useCategory();

    if (categories.isLoading) return <Loading />;
    if (categories.isError) return <p>Error fetching categories</p>;

    return (
        <nav className="flex flex-wrap gap-4">
            {categories.categories?.map((category) => (
                <Button
                    key={category.code}
                    className={selected === category.code ? "text-xs" : "text-xs !text-foreground"}
                    variant={selected === category.code ? "primary" : "text"}
                    onClick={() => onSelect(category.code)}>
                    {category.name}
                </Button>
            ))}
        </nav>
    )

}

export default CategoryPicker;