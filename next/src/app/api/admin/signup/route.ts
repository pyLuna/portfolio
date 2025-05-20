import { addUser } from "@/server/admin/admin";
import { error } from "@/server/return.response";
import { encrypt } from "@/utils/hashing";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    if (process.env.NODE_ENV === "production") return error({ "message": "Forbidden" }, { status: 403 });

    const { username, password } = await req.json();
    console.log("server: ", username, password);

    const encryptedPassword = await encrypt(password);

    const re = await addUser({ username, password: encryptedPassword });

    console.log("addUser response: ", re);

    return new Response("OK", { status: 200 });
}   