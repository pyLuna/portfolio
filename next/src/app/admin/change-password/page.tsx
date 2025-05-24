"use client";
import Button from "@/component/ui/Button";
import TextField from "@/component/ui/TextField";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { post } from "@/lib/utils/fetch";
import { useState } from "react";

const ChangePasswordPage = () => {
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        const newPassword = formData.get("new_password") as string;
        const confirmPassword = formData.get("confirm_password") as string;
        const oldPassword = formData.get("old_password") as string;

        if (newPassword !== confirmPassword) {
            setLoading(false);
            return alert("New password and confirm password does not match.");
        }

        const result = await post<APIResponse>(Api.admin.change_password, {
            data: {
                new: newPassword,
                old: oldPassword
            }
        });
        setLoading(false);
        alert(result?.message);
    };

    return (
        <form className="page" onSubmit={handleUpdate}>
            <TextField
                required
                label="Old Password"
                name="old_password"
                placeholder="**********"
                type="password"
            />
            <TextField
                required
                label="New Password"
                name="new_password"
                placeholder="**********"
                type="password"
            />
            <TextField
                required
                label="Confirm Password"
                name="confirm_password"
                placeholder="**********"
                type="password"
            />

            <Button
                loading={loading}
                variant="primary"
                type="submit">
                Save
            </Button>
        </form>
    )
}

export default ChangePasswordPage;