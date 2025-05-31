import { getContentsByCategory } from "@/lib/contents.service";
import { json } from "@/server/return.response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const category = req.nextUrl.pathname.split("/").pop();
    const result = await getContentsByCategory(category!);
    return json(result);
}