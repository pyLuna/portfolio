// app/api/me/route.ts
import { ErrorCode } from "@/lib/utils/error.codes";
import { getAdmin } from "@/server/admin/admin";
import { error, json } from "@/server/return.response";
import { decodeToken, isTokenExpired } from "@/server/token/token";
import { cookies } from "next/headers";


export async function GET() {

    const c = await cookies();

    const token = c.get("token");

    if (!token) return error({ "message": "Token not found." }, { status: 401, string_code: ErrorCode.token_invalid });

    const isTokenValidRes = isTokenExpired(token.value!);

    if (!isTokenValidRes) return error({ "message": "Token expired." }, { status: 401, string_code: ErrorCode.token_expired });

    const id = await decodeToken().then((v) => v._id);

    console.log("id from token:", id);

    const admin = await getAdmin(id);

    console.log("admin result", admin);

    return json(admin);
}
