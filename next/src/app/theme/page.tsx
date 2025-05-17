import ThemeTile from "@/component/theme/ThemeTile";

const ThemePage = () => {

    return (

        <div className="page flex flex-col gap-4">
            <ThemeTile color="primary" label="Primary" />
            <ThemeTile color="secondary" label="Secondary" />
        </div>
    )
}

export default ThemePage;