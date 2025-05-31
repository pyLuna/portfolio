import { addContent, deleteConent, getContents, updateContent } from "@/lib/contents.service";
import { Content } from "@/lib/types/content.type";
import { error, json } from "@/server/return.response";
import { validateToken } from "@/server/token/token";
import { NextRequest } from "next/server";

export async function GET() {
    const result = await getContents();
    return json(result);
}

export async function POST(req: NextRequest) {
    try {
        await validateToken();
        const body = await req.json();
        const result = await addContent(body as Content);
        return json(result);
    } catch (err) {
        return error({ "message": JSON.stringify(err) });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        await validateToken();

        const body = await req.json();
        const result = await updateContent(body as Content);
        return json(result);
    } catch (err) {
        return error({ "message": JSON.stringify(err) });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await validateToken();

        const body = await req.json();
        const result = await deleteConent(body._id);
        return json(result);
    } catch (err) {
        return error({ "message": JSON.stringify(err) });
    }
}