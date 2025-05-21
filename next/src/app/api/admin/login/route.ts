import { ErrorCode } from "@/lib/utils/error.codes";
import { compare } from "@/lib/utils/hashing";
import { getUserByUsername } from "@/server/admin/admin";
import { error, json } from "@/server/return.response";
import { generateToken } from "@/server/token/token";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
    const response = await req.json();

    const user = await getUserByUsername(response?.username);

    if (!user?.password) {
        return error({ "message": "User not found." }, { status: 404, string_code: ErrorCode.user_not_found });
    }

    const isPasswordValid = await compare(response?.password, user?.password!);

    if (!isPasswordValid) {
        return error({ "message": "Invalid password." }, { status: 400, string_code: ErrorCode.invalid_password });
    }

    delete user.password;

    const token = generateToken(user);

    const c = await cookies();

    c.set("token", token, {
        maxAge: 8 * 1000 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
    });

    return json({ token, ...user });
}

