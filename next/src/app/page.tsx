"use client";
import InfoTile from "@/component/basic/InfoTile";
import Contents from "@/component/contents/Contents";
import Badge from "@/component/ui/Badge";
import Loading from "@/component/ui/Loading";
import { useBasicInfo } from "@/hooks/useBasicInfoHook";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Pattaya } from "next/font/google";

const font = Pattaya({ weight: ["400"], subsets: ["latin"] });

const Home = () => {
  const theme = useThemeHook();
  const { basicInfo, isLoading } = useBasicInfo();

  if (!theme.mounted) return null;

  return (
    <div className="page flex flex-col gap-16">
      <hr className="block lg:hidden divider" />
      <h1 className={`${font.className} flex w-full text-center flex-col !text-3xl lg:!text-4xl`}>
        If you can dream it, you can do it.
        <span className="text-sm text-gray-400">
          - Walt Disney
        </span>
      </h1>
      <hr className="divider" />

      {basicInfo && (
        <div className="flex justify-around">
          <InfoTile
            label="Location"
            value={`${basicInfo?.municipality}, PH`}
          />
          <InfoTile
            label="Projects"
            value={`${basicInfo?.projects}+ Projects`}
          />
          <InfoTile
            label="Experience"
            value={`${basicInfo?.years_of_experience} Years`}
          />
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center">
          <Loading></Loading>
        </div>
      )}

      <hr className="divider" />

      <Contents category="projects" label="Projects">
        {(content) => (
          <article className="flex flex-col gap-2" key={content._id.toString()}>
            <div className="flex gap-2">
              <b>{content.title} </b>
              <Badge color={content.position === "Completed" ? "primary" : "secondary"}>
                {content.position}
              </Badge>
            </div>
            <small className="text-gray-400">{content.description}</small>
          </article>
        )}
      </Contents>
      <Contents category="educ" label="Education" >
        {(content) => (
          <article className="flex flex-col" key={content._id.toString()}>
            <div className="flex gap-2 items-center">
              <b>{content.title} </b>
              <small>
                ({content.from} - {content.to})
              </small>
            </div>
            <small className="text-gray-400">{content.position}</small>
          </article>
        )}
      </Contents>

    </div>
  );
}

export default Home;