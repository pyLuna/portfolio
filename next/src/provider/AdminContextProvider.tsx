"use client";
import { AdminContext } from "@/hooks/useAdminHook";
import { Admin } from "@/lib/types/admin.type";
import { Api } from "@/lib/utils/api.url";
import { get, post } from "@/lib/utils/fetch";
import Url from "@/lib/utils/url";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const pathname = usePathname();

  const {
    data: admin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await get<Admin>(Api.admin.my);

      if (!res) return null;

      return res;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
    enabled: !pathname.endsWith("admin"),
  });

  const invalidateQuery = async () => {
    await queryClient.invalidateQueries({ queryKey: ["admin"] });
  };

  const refresh = async () => {
    await invalidateQuery();
  };

  const logout = async () => {
    await post(Api.admin.logout);
    await invalidateQuery();
    router.replace(Url.admin.login);
  };

  useEffect(() => {
    if ((admin || admin !== null) && !isLoading) {
      router.replace(Url.admin.home);
    } else {
      router.replace(Url.admin.login);
    }
  }, [admin]);

  return (
    <AdminContext.Provider
      value={{
        admin,
        isLoggedIn: !!admin,
        loading: isLoading,
        error: isError,
        refresh,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
