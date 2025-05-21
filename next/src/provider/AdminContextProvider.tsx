"use client";
import { AdminContext } from "@/hooks/useAdminHook";
import { Admin } from "@/lib/types/admin";
import { Api } from "@/lib/utils/api.url";
import { get } from "@/lib/utils/fetch";
import Url from "@/lib/utils/url";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AdminContextProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: admin, isLoading, isError } = useQuery({
        queryKey: ["admin"],
        queryFn: async () => {
            const res = await get<Admin>(Api.admin.my);
            return res;
        },
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
        enabled: !pathname.endsWith("admin"),
    });

    const refresh = async () => {
        const queryClient = new QueryClient();
        await queryClient.invalidateQueries({ queryKey: ["admin"] });
        console.log("refreshed", admin);
    }

    useEffect(() => {
        console.log("useEffect admin result: ", admin);
        if ((admin || admin !== null) && !isLoading) {
            console.log(Url.admin.home)
            router.replace(Url.admin.home);
        } else {
            console.log(Url.admin.login)
            router.replace(Url.admin.login);
        }
    }, [admin]);

    return (
        <AdminContext.Provider value={{
            admin,
            isLoggedIn: !!admin,
            loading: isLoading,
            error: isError,
            refresh,
        }}>
            {children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider;