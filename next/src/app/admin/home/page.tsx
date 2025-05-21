"use client";

import Loading from "@/component/ui/Loading";
import { useAdminContextHook } from "@/hooks/useAdminHook";

const AdminPage = () => {
    const adminContext = useAdminContextHook();

    if (adminContext?.loading) return <Loading />;
    if (adminContext?.error) return <p>Error fetching admin</p>

    return (
        <section className="page">
            <p>Admin Page</p>
            <pre>{JSON.stringify(adminContext?.admin, null, 2)}</pre>
        </section>
    )
}
export default AdminPage;