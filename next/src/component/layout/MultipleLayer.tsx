"use client";
import IconContextProvider from "@/provider/IconContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import EmploymentStatus from "./EmploymentStatus";
import Header from "./Header";
import MyDescription from "./MyDescription";
import TopLoadingBar from "./TopLoadingBar";
import ViewSourceCode from "./ViewSourceCode";

const MultipleLayer = ({ children }: { children: ReactNode }) => {

    const path = usePathname();
    let mainClassName = "flex flex-col lg:grid lg:grid-cols-[250px_1fr] gap-14 lg:gap-0";

    if (path.includes("admin")) {
        mainClassName = "";
    }

    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider enableSystem={true}>
                <IconContextProvider>
                    <TopLoadingBar />
                    <EmploymentStatus />
                    <ViewSourceCode />
                    <div className="grid grid-rows-[80px_1fr] max-w-4xl lg:max-w-5xl mx-auto">
                        <Header />
                        <main className={mainClassName}>
                            <MyDescription />
                            {children}
                        </main>
                    </div>
                </IconContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default MultipleLayer;