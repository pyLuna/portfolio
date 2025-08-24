import {
  addCategory,
  deleteCategory,
  getCategory,
} from "@/lib/category.service";
import { Category } from "@/lib/types/category.type";
import { error, json } from "@/server/return.response";
import { validateToken } from "@/server/token/token";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    await validateToken();
    const result = await getCategory();
    return json(result);
  } catch (err) {
    return error({ message: JSON.stringify(err) });
  }
}

export async function POST(req: NextRequest) {
  try {
    await validateToken();
    const body = await req.json();
    const result = await addCategory(body as Category);

    if (!result)
      return error({ message: "Failed to add category." }, { status: 500 });

    return json(result);
  } catch (err) {
    return error({ message: JSON.stringify(err) });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await validateToken();
    const body = await req.json();
    const result = await deleteCategory(body.code);

    if (!result)
      return error({ message: "Failed to add category." }, { status: 500 });

    return json({ message: "Category deleted." });
  } catch (err) {
    return error({ message: JSON.stringify(err) });
  }
}
