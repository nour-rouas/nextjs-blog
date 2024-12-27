"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    //insert post to database
    await prisma.post.create({
        data: {
            title: title,
            body: body,
        },
    });

    // revalidate the cache
    revalidatePath("/posts");

}