import { getUserByUsername } from "@/server/admin/admin";
import { error, json } from "@/server/return.response";
import { generateToken } from "@/server/token/token";
import { ErrorCode } from "@/utils/error.codes";
import { compare } from "@/utils/hashing";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const response = await req.json();
    console.log("response -----> ", response);

    const user = await getUserByUsername(response?.username);

    if (!user?.password) {
        req.cookies.delete("token");
        return error({ "message": "User not found." }, { status: 404, string_code: ErrorCode.user_not_found });
    }

    const isPasswordValid = await compare(response?.password, user?.password!);

    if (!isPasswordValid) {
        return error({ "message": "Invalid password." }, { status: 400, string_code: ErrorCode.invalid_password });
    }

    delete user.password;
    const token = generateToken(user);
    req.cookies.set("token", token);

    return json({ token, ...user });
}

