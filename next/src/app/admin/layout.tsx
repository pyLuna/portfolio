import AdminContextProvider from "@/provider/AdminContextProvider";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <AdminContextProvider>
            {children}
        </AdminContextProvider>
    );
}

export default AdminLayout;