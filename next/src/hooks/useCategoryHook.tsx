import { Category } from "@/lib/types/category.type";
import { Api } from "@/lib/utils/api.url";
import { get } from "@/lib/utils/fetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminContextHook } from "./useAdminHook";

export const useCategory = () => {
    const adminContext = useAdminContextHook();
    const queryClient = useQueryClient();
    const { data: categories, isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const re = await get<Category[]>(Api.admin.category)
            if (!re) return null;
            return re;
        },
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
        enabled: adminContext?.isLoggedIn
    });

    const refresh = async () => {
        await queryClient.invalidateQueries({ queryKey: ["categories"] });
    }

    return {
        categories,
        isLoading,
        isError,
        refresh
    }
}