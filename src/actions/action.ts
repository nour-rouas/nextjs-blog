"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    
    // Auth check
    const { isAuthenticated } = getKindeServerSession();
    if ((!isAuthenticated())) {
        redirect("/api/auth/login");
    }

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