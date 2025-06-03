import Icon from "../ui/Icon";
import Contents from "./Contents";

const Skills = () => {
    return (
        <Contents category="skills" label="Skills" className="!gap-2 justify-center" >
            {(content) => (
                <div key={content._id.toString()} className="hover-content flex items-center gap-2 w-fit !p-1 !px-2">
                    <Icon name={content.icon} />
                    <p className="text-sm font-semibold">{content.title}</p>
                </div>
            )}
        </Contents>
    )
}

export default Skills;