import prisma from "@/lib/db";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function PostsList() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const posts = await prisma.post.findMany();

    return (
    <ul>
        {posts.map((post) => (
            <li key={post.id} className="mb-3">
            <Link href={`posts/${post.id}`} className="text-l font-medium hover:underline">{post.title}</Link>
            </li>
        ))}
    </ul>
    );
}