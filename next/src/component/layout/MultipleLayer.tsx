"use client";
import IconContextProvider from "@/provider/IconContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import Header from "./Header";
import ViewSourceCode from "./ViewSourceCode";

const MultipleLayer = ({ children }: { children: ReactNode }) => {
    // Create a client
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>

            <ThemeProvider enableSystem={true}>
                <IconContextProvider>
                    <ViewSourceCode />
                    <div className="relative grid grid-rows-[80px_1fr] min-h-screen">
                        <Header />
                        <main className="">
                            {children}
                        </main>
                    </div>
                </IconContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default MultipleLayer;