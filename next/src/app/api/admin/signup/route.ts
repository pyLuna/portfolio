import { encrypt } from "@/lib/utils/hashing";
import { addUser } from "@/server/admin/admin";
import { error } from "@/server/return.response";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {

        if (process.env.NODE_ENV === "production") return error({ "message": "Forbidden" }, { status: 403 });

        const { username, password } = await req.json();

        const encryptedPassword = await encrypt(password);

        await addUser({ username, password: encryptedPassword });

        return new Response("OK", { status: 200 });
    } catch (e) {
        return error({ "message": JSON.stringify(e) });
    }
}   