"use client";
import Debug from "@/component/Debug";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import { Api } from "@/utils/api.url";
import { FormEvent, useRef, useState } from "react";

const AdminPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(Api.admin_login);
    };

    const handleLogin = async (url: string) => {
        if (loading) return;
        setLoading(true);
        console.log("Initiating ... url: ", url, formRef.current);
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const object = Object.fromEntries(formData.entries());
        console.log("Form data object:", object, "formData:", formData);

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(object),
        });

        if (response.ok) {
            console.log("Login success");
            setLoading(false);
            return;
        }
        setLoading(false);
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
                        <Button type="button" variant="secondary" loading={loading} onClick={() => handleLogin(Api.admin_signup)}>Sign Up</Button>
                    </Debug>
                </div>
            </form>
        </section>
    );
}

export default AdminPage;