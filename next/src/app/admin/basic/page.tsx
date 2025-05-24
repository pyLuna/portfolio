"use client";
import Button from "@/component/ui/Button";
import TextArea from "@/component/ui/TextArea";
import TextField from "@/component/ui/TextField";
import { useBasicInfo } from "@/hooks/useBasicInfoHook";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { patch } from "@/lib/utils/fetch";
import { useState } from "react";

const BasicInfoPage = () => {

    const basicInfo = useBasicInfo();
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        const object = Object.fromEntries(formData.entries());

        const res = await patch<APIResponse>(Api.admin.basic, { data: object });
        setLoading(false);
        alert(res?.message);
    }

    return (
        <section className="page space-y-2">
            <h1>Basic Info </h1>
            <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
                <TextField
                    required
                    label="Full Name"
                    name="full_name"
                    placeholder="My full name"
                    defaultValue={basicInfo.basicInfo?.full_name}
                />
                <TextField
                    label="Address"
                    name="address"
                    placeholder="My address"
                    defaultValue={basicInfo.basicInfo?.address}
                />
                <TextField
                    label="Zip Code"
                    name="zip_code"
                    placeholder="0000"
                    type="number"
                    defaultValue={basicInfo.basicInfo?.zip_code}
                />
                <TextField
                    required
                    label="Phone Number"
                    name="phone_number"
                    placeholder="My Phone Number"
                    type="tel"
                    defaultValue={basicInfo.basicInfo?.phone_number}
                />
                <TextField
                    label="Email"
                    name="email"
                    placeholder="My Email"
                    required
                    type="email"
                    defaultValue={basicInfo.basicInfo?.email}
                />
                {/* <TextField
                            label="Employment Status"
                            name="employment_status"
                            required
                            type="checkbox"
                            defaultValue={basicInfo.basicInfo?.employment_status}
                        /> */}
                <TextArea
                    label="Description"
                    name="description"
                    placeholder="Tell something about yourself"
                    required
                    defaultValue={basicInfo.basicInfo?.description}
                />

                <Button
                    loading={loading}
                    variant="primary"
                    type="submit">
                    Save
                </Button>
            </form>
        </section>
    )
}

export default BasicInfoPage;