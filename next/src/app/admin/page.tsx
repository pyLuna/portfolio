"use client";
import Debug from "@/component/Debug";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import { useAdminContextHook } from "@/hooks/useAdminHook";
import { Api } from "@/lib/utils/api.url";
import { post } from "@/lib/utils/fetch";
import Url from "@/lib/utils/url";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

const AdminLoginPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const adminContext = useAdminContextHook();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(Api.admin.login);
    };

    const handleLogin = async (url: string) => {
        if (loading) return;
        setLoading(true);

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const object = Object.fromEntries(formData.entries());
        const result = await post(url, {
            data: object,
            auth: false,
        });
        setLoading(false);
        console.log(result);

        if (!result) return null;

        adminContext?.refresh();
        router.replace(Url.admin.home);
    }

    return (
        <section className="page">
            <h1>Admin Login</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2 max-w-lg">
                <label className="mt-2" htmlFor="username">Username</label>
                <Input type="text" name="username" id="username" placeholder="Username"></Input>

                <label className="mt-2" htmlFor="Password">Password</label>
                <Input type="password" name="password" id="password" placeholder="Password"></Input>
                <div className="flex flex-row justify-center gap-4">
                    <Button type="submit" loading={loading}>Login</Button>
                    <Debug>
                        <Button type="button" variant="secondary" loading={loading} onClick={() => handleLogin(Api.admin.signup)}>Sign Up</Button>
                    </Debug>
                </div>
            </form>
        </section>
    );
}

export default AdminLoginPage;