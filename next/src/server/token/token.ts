import RecordType from "@/lib/types/record";
import jwt from "jsonwebtoken";


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

const verifyToken = (token: string) => jwt.verify(token, process.env.NEXT_TOKEN_SECRET as string);

/**
 * Determines if a given JWT is expired.
 * 
 * @param token - The JSON Web Token to be checked.
 * @returns `true` if the token is expired, `false` if it is not.
 */

const isTokenExpired = (token: string) => {
    const decoded = verifyToken(token)! as jwt.JwtPayload;
    const dateToday = new Date(Date.now());
    const expirationDate = new Date(decoded.exp!);
    return dateToday > expirationDate;
};

export {
    generateToken, isTokenExpired, verifyToken
};

