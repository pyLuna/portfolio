import StackIcon from "tech-stack-icons";

const Icon = ({ name }: { name?: string }) => {

    if (!name || name === "") return null;

    return (
        <StackIcon
            name={name}
            className={`h-4 ${name === "github" ? "dark:bg-foreground rounded-full" : ""}`}
        />
    )
}

export default Icon;