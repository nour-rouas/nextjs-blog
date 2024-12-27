import { createPost } from "@/actions/action";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {
    return (
        <main className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
            <div className="flex flex-col items-center gap-4">
                <form action={createPost} className="flex gap-2">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title for new Post"
                        className="border rounded px-3 h-10"
                        required
                    />
                    <button className="bg-zinc-900 text-zinc-200 px-5 rounded h-10">
                        Submit
                    </button>
                </form>
                
                <button className="bg-zinc-900 text-zinc-200 px-5 mt-5 rounded h-10">
                    <LogoutLink className="text-zinc-200">Logout</LogoutLink>
                </button>
            </div>
        </main>
    );
}