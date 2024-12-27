import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function PostsList() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json();

    return (
    <ul>
        {data.posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
            <li key={post.id} className="mb-3">
            <Link href={`posts/${post.id}`} className="text-l font-medium hover:underline">{post.title}</Link>
            </li>
        ))}
    </ul>
    );
}