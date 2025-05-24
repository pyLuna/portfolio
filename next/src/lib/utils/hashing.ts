import { compare as bcryptCompare, hash } from "bcrypt";
const encrypt = async (text: string) => {
    return await hash(text, 10);
}

const compare = async (text: string, hash: string) => {
    console.log("comparing", text, hash);
    return await bcryptCompare(text, hash);
}

export { compare, encrypt };

