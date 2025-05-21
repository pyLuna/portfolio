import { json } from "@/server/return.response";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const c = await cookies();
    c.delete("token");
    console.log("token deleted", c);
    return json({ "message": "Logout successful." });
}
