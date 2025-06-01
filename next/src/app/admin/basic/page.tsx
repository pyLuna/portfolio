"use client";
import Button from "@/component/ui/Button";
import TextArea from "@/component/ui/TextArea";
import TextField from "@/component/ui/TextField";
import { useBasicInfo } from "@/hooks/useBasicInfoHook";
import { APIResponse } from "@/lib/types/response";
import { Api } from "@/lib/utils/api.url";
import { patch } from "@/lib/utils/fetch";
import { extractFormData } from "@/lib/utils/functions";
import { useEffect, useState } from "react";

const BasicInfoPage = () => {

    const { basicInfo } = useBasicInfo();
    const [loading, setLoading] = useState(false);
    const [employed, setEmployed] = useState(false);

    useEffect(() => {
        if (basicInfo?.employment_status) setEmployed(true);
    }, [basicInfo]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const data = extractFormData(e);

        const res = await patch<APIResponse>(Api.admin.basic, {
            data: {
                ...data,
                employment_status: employed
            }
        });
        setLoading(false);
        alert(res?.message);
    }

    return (
        <section className="page space-y-2">
            <h1>Basic Info </h1>
            <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
                <TextField
                    labelClass="!flex-row justify-between pr-8"
                    label="Looking for Employment"
                    name="employment_status"
                    type="checkbox"
                    onChange={(e) => setEmployed(e.target.checked)}
                    checked={employed}
                />
                <TextField
                    required
                    label="Full Name"
                    name="full_name"
                    placeholder="My full name"
                    defaultValue={basicInfo?.full_name}
                />
                <TextField
                    required
                    label="Number of Projects"
                    name="projects"
                    placeholder="Total number of handled projects"
                    type="number"
                    defaultValue={basicInfo?.projects}
                />
                <TextField
                    required
                    label="Years of Experience"
                    name="years_of_experience"
                    placeholder="Total years of work experience"
                    type="number"
                    defaultValue={basicInfo?.years_of_experience}
                />
                <TextField
                    label="Address"
                    name="address"
                    placeholder="My address"
                    defaultValue={basicInfo?.address}
                />
                <TextField
                    label="Municipality"
                    name="municipality"
                    placeholder="Quezon City"
                    type="text"
                    defaultValue={basicInfo?.municipality}
                />
                <TextField
                    label="Country"
                    name="country"
                    placeholder="Philipphines"
                    type="text"
                    defaultValue="Philipphines"
                />
                <TextField
                    label="Zip Code"
                    name="zip_code"
                    placeholder="0000"
                    type="number"
                    defaultValue={basicInfo?.zip_code}
                />
                <TextField
                    required
                    label="Phone Number"
                    name="phone_number"
                    placeholder="My Phone Number"
                    type="tel"
                    defaultValue={basicInfo?.phone_number}
                />
                <TextField
                    label="Email"
                    name="email"
                    placeholder="My Email"
                    required
                    type="email"
                    defaultValue={basicInfo?.email}
                />
                <TextArea
                    label="Description"
                    name="description"
                    placeholder="Tell something about yourself"
                    required
                    defaultValue={basicInfo?.description}
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