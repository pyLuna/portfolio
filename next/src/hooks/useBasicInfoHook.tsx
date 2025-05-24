import { BasicInfoType } from "@/lib/types/basic_info.type";
import { Api } from "@/lib/utils/api.url";
import { get, post } from "@/lib/utils/fetch";
import { useQuery } from "@tanstack/react-query";
import { useAdminContextHook } from "./useAdminHook";

export const useBasicInfo = () => {
    const adminContext = useAdminContextHook();

    const { data: basicInfo, isLoading, isError } = useQuery({
        queryKey: ["basic-info"],
        queryFn: async () => {
            const res = await get<BasicInfoType>(Api.admin.basic);

            if (!res) {
                await post(Api.admin.basic);
            }

            return res;
        },
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
        enabled: adminContext?.isLoggedIn
    });

    return {
        basicInfo,
        isLoading,
        isError
    };
}