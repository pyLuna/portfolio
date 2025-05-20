import query from "@/utils/query";
import { NextRequest } from "next/server";

const GET = (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    console.log("cookie:", request.cookies.get("token"));

    return new Response(
        JSON.stringify({ result: `You searched for: ${query}` }),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        },
    );
}

const POST = async (request: NextRequest) => {
    const data = await query({
        database_name: "sample_mflix",
        collection_name: "movies",
        queryFn: async (client) => {
            return await client.find({}).limit(10).toArray();
        },
    });
    return new Response(JSON.stringify(data));
}

export { GET, POST };

