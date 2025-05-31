"use client";

import MenuTile from "@/component/admin/MenuTile";
import Loading from "@/component/ui/Loading";
import { useAdminContextHook } from "@/hooks/useAdminHook";
import Url from "@/lib/utils/url";

const AdminPage = () => {
    const adminContext = useAdminContextHook();

    if (adminContext?.loading) return <Loading />;
    if (adminContext?.error) return <p>Error fetching admin</p>

    return (
        <section className="page grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[60px]">
            <MenuTile href={Url.admin.basic} title="Basic Information" subtitle="Update basic information" />
            <MenuTile href={Url.admin.change_password} title="Change Password" subtitle="Update Password" />
            <MenuTile href={Url.admin.category} title="Categories" subtitle="Manage Categories" />
            <MenuTile href={Url.admin.contents.view} title="Contents" subtitle="Manage Contents" />
            <MenuTile title="Version" subtitle="0.1.0+1" />
            <MenuTile onClick={() => adminContext?.logout()} title="Logout" subtitle="Logout as admin" />
        </section>
    )
}
export default AdminPage;