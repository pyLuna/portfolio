import { Content } from "@/lib/types/content.type";
import { Api } from "@/lib/utils/api.url";
import { get } from "@/lib/utils/fetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminContextHook } from "./useAdminHook";

export const useContent = () => {
    const adminContext = useAdminContextHook();
    const queryClient = useQueryClient();
    const { data: contents, isLoading, isError } = useQuery({
        queryKey: ["contents"],
        queryFn: async () => {
            const re = await get<Content[]>(Api.admin.contents.main);
            if (!re) return null;
            return re;
        },
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
        enabled: adminContext?.isLoggedIn
    });

    const refresh = async () => {
        await queryClient.invalidateQueries({ queryKey: ["contents"] });
    }

    return {
        contents,
        isLoading,
        isError,
        refresh
    }
}