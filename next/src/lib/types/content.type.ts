import { ObjectId } from "mongodb";

export type Content = {
    _id: ObjectId;
    logo_url?: string;
    title: string;
    from?: string;
    to?: string;
    category: string;
    location?: string;
    position?: string;
    description?: string;
    created_at: Date;
    updated_at?: Date;
    url?: string;
}