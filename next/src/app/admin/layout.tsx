import AdminContextProvider from "@/provider/AdminContextProvider";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="border place-content-center ">
            <AdminContextProvider>
                {children}
            </AdminContextProvider>
        </div>
    );
}

export default AdminLayout;