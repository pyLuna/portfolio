"use client";
import { Admin } from "@/lib/types/admin";
import { createContext, useContext } from "react";

type AdminContextType = {
    admin?: Admin | null,
    isLoggedIn: boolean,
    loading: boolean,
    error: boolean,
    refresh: () => void
}

export const AdminContext = createContext<AdminContextType | null>(null);

/**
 * Retrieves the admin context, which includes the admin's data, whether the user is logged in, whether the context is loading, and whether there was an error.
 * @returns The admin context.
 */
export const useAdminContextHook = () => {
    const adminContext = useContext(AdminContext);

    return adminContext;
}