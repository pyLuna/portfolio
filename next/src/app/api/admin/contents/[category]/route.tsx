import { getContentsByCategory } from "@/lib/contents.service";
import { json } from "@/server/return.response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const category = req.nextUrl.pathname.split("/").pop();
    const limit = req.nextUrl.searchParams.get("limit");

    const result = await getContentsByCategory(category!, parseInt(limit!));
    return json(result);
}