import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });
    
    if (!post) {
        notFound(); // 404
    }

    return (
        <main className="text-center pt-24 px-7">
        <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
        <p className="max-w-[700px] mx-auto">{post.body}</p>
        </main>
    );
}