// app/api/me/route.ts
import { getAdmin } from "@/server/admin/admin";
import { error, json } from "@/server/return.response";
import { decodeToken, validateToken } from "@/server/token/token";


export async function GET() {
    try {
        await validateToken();

        const id = await decodeToken().then((v) => v._id);

        const admin = await getAdmin(id);

        return json(admin);
    } catch (err) {
        return error({ "message": JSON.stringify(err) });
    }
}
