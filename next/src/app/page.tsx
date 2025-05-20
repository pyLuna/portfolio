"use client";
import { useThemeHook } from "@/hooks/theme";
import { Pattaya } from "next/font/google";

const font = Pattaya({ weight: ["400"], subsets: ["latin"] });

const Home = () => {
  const theme = useThemeHook();

  if (!theme.mounted) return null;

  return (
    <div className="page">
      <div className="lg:flex lg:flex-row w-full justify-between">
        <h1 className={`${font.className} grow flex text-center flex-col justify-center text-2xl lg:text-3xl h-[300px]`}>
          If you can dream it, you can do it.
          <span className="text-sm text-gray-400 mt-2">
            - Walt Disney
          </span>
        </h1>
        <div className="mt-4 lg:mt-0">
          <div className="bg-primary-600 w-full lg:w-[600px] h-[60vh]">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;