import { ADMIN } from "@/lib/utils/constants";
import { ErrorCode } from "@/lib/utils/error.codes";
import { compare, encrypt } from "@/lib/utils/hashing";
import query from "@/lib/utils/query";
import { getAdmin } from "@/server/admin/admin";
import { error, json } from "@/server/return.response";
import { decodeToken, validateToken } from "@/server/token/token";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await validateToken();

        const response = await req.json();
        const data = await decodeToken();

        console.log("response body", response, "data", data);

        const admin = await getAdmin(data._id, { password: true });
        console.log("admin", admin);
        const isPasswordValid = await compare(response?.old, admin?.password!);

        if (!isPasswordValid) {
            return error({ "message": "Invalid password." }, { status: 400, string_code: ErrorCode.invalid_password });
        }

        const encryptedPassword = await encrypt(response?.new!);

        console.log("encryptedPassword", encryptedPassword);
        const result = await query({
            collection_name: ADMIN, queryFn: async (client) => {
                return await client.updateOne({ _id: new ObjectId(data._id) }, { $set: { password: encryptedPassword } });
            },
        });
        console.log("result", result);
        return json({ "message": "Password updated.", "result": result });
    } catch (e) {
        return error({ "message": JSON.stringify(e) });
    }
} 