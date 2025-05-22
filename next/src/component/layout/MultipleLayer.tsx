"use client";
import IconContextProvider from "@/provider/IconContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSidebar";
import TopLoadingBar from "./TopLoadingBar";
import ViewSourceCode from "./ViewSourceCode";

const MultipleLayer = ({ children }: { children: ReactNode }) => {

    const path = usePathname();
    let mainClassName = "flex flex-col md:grid md:grid-cols-[250px_1fr] gap-4";

    if (path.includes("admin")) {
        mainClassName = "";
    }

    // Create a client
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider enableSystem={true}>
                <IconContextProvider>
                    <TopLoadingBar />
                    <ViewSourceCode />
                    <div className="grid grid-rows-[80px_1fr] max-w-4xl lg:max-w-5xl mx-auto">
                        <Header />
                        <main className={mainClassName}>
                            <LeftSideBar></LeftSideBar>
                            {children}
                        </main>
                    </div>
                </IconContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default MultipleLayer;