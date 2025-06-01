"use client";
import InfoTile from "@/component/basic/InfoTile";
import Education from "@/component/contents/Education";
import Experience from "@/component/contents/Experience";
import Projects from "@/component/contents/Projects";
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
    <div className="page flex flex-col gap-8">
      <hr className="block lg:hidden divider" />
      <h1 className={`${font.className} flex w-full text-center flex-col !text-3xl lg:!text-4xl my-12`}>
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
            id="projects"
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

      <Projects />
      <Experience />
      <Education />

    </div>
  );
}

export default Home;