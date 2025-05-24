import { addBasicInfo, getBasicInfo, updateBasicInfo } from "@/lib/basic_info";
import { BasicInfoType } from "@/lib/types/basic_info.type";
import { ErrorCode } from "@/lib/utils/error.codes";
import { error, json } from "@/server/return.response";
import { decodeToken, isTokenExpired } from "@/server/token/token";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// TODO: ERROR HANDLING

export async function GET() {

    const basicInfo = await getBasicInfo();

    if (!basicInfo) return error({ "message": "Basic info not found." }, { status: 404, string_code: ErrorCode.basic_info_not_found });

    return json(basicInfo);
}

export async function POST(req: NextRequest) {
    // TODO: Make an easier way to validate token without using the NextJs Middleware
    const c = await cookies();
    const isValid = isTokenExpired(c.get("token")?.value!);

    if (!isValid) {
        c.delete("token");
        return error({ "message": "Token expired." }, { status: 401, string_code: ErrorCode.token_expired })
    }

    const id = await decodeToken().then((v) => v._id);

    const existing = await getBasicInfo();
    if (existing) return error({ "message": "Basic info already exists." }, { status: 400, string_code: ErrorCode.basic_info_already_exists });
    await addBasicInfo(id);

    return json({ "message": "Basic info updated." });
}

export async function PATCH(req: NextRequest) {
    // TODO: Make an easier way to validate token without using the NextJs Middleware
    const c = await cookies();
    const isValid = isTokenExpired(c.get("token")?.value!);
    console.log("token expiration check");

    if (!isValid) {
        c.delete("token");
        return error({ "message": "Token expired." }, { status: 401, string_code: ErrorCode.token_expired })
    }

    const data = await req.json() as Partial<BasicInfoType>;
    console.log("body check");

    const id = await decodeToken().then((v) => v._id);
    console.log("decode token check");

    const result = await updateBasicInfo({ ...data, admin_id: id });
    console.log("update Basic info check; result ", result);

    return json({ "message": "Basic info updated." });
}