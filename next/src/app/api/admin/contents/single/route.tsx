import { getContentById } from "@/lib/contents.service";
import { error, json } from "@/server/return.response";
import { validateToken } from "@/server/token/token";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await validateToken();
        const id = req.nextUrl.searchParams.get('id');
        const result = await getContentById(id!);
        return json(result);
    } catch (err) {
        return error({ "message": JSON.stringify(err) });
    }

}