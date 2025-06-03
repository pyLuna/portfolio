import { Content } from "@/lib/types/content.type";
import { Api } from "@/lib/utils/api.url";
import { get } from "@/lib/utils/fetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminContextHook } from "./useAdminHook";

export const useContent = (category?: string) => {
    const adminContext = useAdminContextHook();
    const queryClient = useQueryClient();
    const { data: contents, isLoading, isError } = useQuery({
        queryKey: ["contents", category],
        queryFn: async () => {
            let uri = Api.admin.contents.main;
            console.log("category", category);
            if (category && category !== "") uri = Api.admin.contents.get(category);

            const re = await get<Content[]>(uri);
            if (!re) return null;
            return re;
        },
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
        enabled: adminContext?.isLoggedIn
    });

    const refresh = async () => {
        await queryClient.invalidateQueries({ queryKey: ["contents", category] });
    }

    return {
        contents,
        isLoading,
        isError,
        refresh
    }
}