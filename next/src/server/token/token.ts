import RecordType from "@/types/record";
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
    try {
        const decoded = verifyToken(token)! as jwt.JwtPayload;
        return decoded.exp ? decoded.exp < Date.now() / 1000 : false;
    } catch (err) {
        return true;
    }
};

export {
    generateToken, isTokenExpired, verifyToken
};

