"use client";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Pattaya } from "next/font/google";

const font = Pattaya({ weight: ["400"], subsets: ["latin"] });

const Home = () => {
  const theme = useThemeHook();

  if (!theme.mounted) return null;

  return (
    <div className="page">
      <h1 className={`${font.className} grow flex text-center flex-col justify-center text-3xl lg:text-4xl h-[300px]`}>
        If you can dream it, you can do it.
        <span className="text-sm text-gray-400 mt-2">
          - Walt Disney
        </span>
      </h1>
    </div>
  );
}

export default Home;