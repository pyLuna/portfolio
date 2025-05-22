"use client";

import MenuTile from "@/component/admin/MenuTile";
import Loading from "@/component/ui/Loading";
import { useAdminContextHook } from "@/hooks/useAdminHook";

const AdminPage = () => {
    const adminContext = useAdminContextHook();

    if (adminContext?.loading) return <Loading />;
    if (adminContext?.error) return <p>Error fetching admin</p>

    return (
        <section className="page grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[80px]">
            <MenuTile href="#" title="Basic Information" subtitle="Update basic information" />
            <MenuTile href="#" title="Basic Information" subtitle="Update basic information" />
            <MenuTile href="#" title="Basic Information" subtitle="Update basic information" />
            <MenuTile href="#" title="Basic Information" subtitle="Update basic information" />
        </section>
    )
}
export default AdminPage;