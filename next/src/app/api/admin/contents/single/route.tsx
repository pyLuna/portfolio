import { getContentById } from "@/lib/contents.service";
import { json } from "@/server/return.response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id');
    const result = await getContentById(id!);
    return json(result);
}