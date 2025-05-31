import RecordType from "@/lib/types/record";
import { ErrorCode } from "@/lib/utils/error.codes";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { error } from "../return.response";


/**
 * Generates a JSON Web Token (JWT) for a given user ID.
 * 
 * @param id - The user ID to be embedded in the token payload.
 * @returns A signed JWT containing the user ID with a 1-day expiration.
 */

const generateToken = (data: RecordType) => {
    const token = jwt.sign(data, process.env.NEXT_TOKEN_SECRET as string, { expiresIn: "1d" });
    return token;
}

const decodeToken = async () => {
    const token = await getToken();
    const decoded = jwt.verify(token, process.env.NEXT_TOKEN_SECRET as string);

    return JSON.parse(JSON.stringify(decoded)) as RecordType;
};

/**
 * Determines if a given JWT is expired.
 * 
 * @param token - The JSON Web Token to be checked.
 * @returns `true` if the token is expired, `false` if it is not.
 */

const isTokenExpired = async (token: string) => {
    const decoded = await decodeToken();
    const dateToday = new Date(Date.now());
    const expirationDate = new Date(decoded.exp!);
    return dateToday > expirationDate;
};

const getToken = async () => {
    const cookie = await cookies();
    return cookie.get("token")?.value!;
}

const validateToken = async () => {
    const token = await getToken();
    if (!token) throw error({ "message": "Token not found." }, { status: 401, string_code: ErrorCode.token_invalid });

    const isValid = isTokenExpired(token);

    if (!isValid) {
        throw error({ "message": "Token expired." }, { status: 401, string_code: ErrorCode.token_expired })
    }
}

export { decodeToken, generateToken, getToken, isTokenExpired, validateToken };

