import { ObjectId } from "mongodb";

export interface BasicInfoType {
    admin_id: ObjectId;
    full_name: string;
    address: string;
    zip_code: string;
    phone_number: string;
    email: string;
    description: string;
    employment_status: string;
}