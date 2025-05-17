"use client";
import ThemeTrigger from "@/component/layout/ThemeTrigger";
import { useThemeHook } from "@/hooks/theme";

const Home = () => {
  const theme = useThemeHook();

  if (!theme.mounted) return null;

  return (
    <div className="page">
      <h1>Home</h1>
      <p>Theme: {theme.theme}</p>
      <p>System: {theme.systemTheme}</p>
      <ThemeTrigger />
    </div>
  );
}

export default Home;