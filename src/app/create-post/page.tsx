"use client";

import { createPost } from "@/actions/action";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        await createPost(formData);
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide notification after 3 seconds
    };

    return (
        <main className="text-center pt-8 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
            <div className="flex flex-col items-center gap-4">
                <form onSubmit={handleSubmit} 
                    className="flex flex-col max-w-[600px] mx-auto gap-2 my-2"
                    >

                    <input
                        type="text"
                        name="title"
                        placeholder="Title for new Post"
                        className="border rounded px-3 h-10"
                        required
                    />

                    <textarea 
                        name="body"
                        placeholder="Body content for new Post"
                        className="border rounded px-3 py-2"
                        rows={6}
                        required
                    />

                    <button 
                        type="submit" 
                        className="bg-zinc-900 text-zinc-200 px-5 rounded h-10"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                
                {submitted && (
                    <div className="bg-green-500 text-white px-4 py-2 rounded mt-3">
                        Post Submitted
                    </div>
                )}
                
                <button className="bg-zinc-900 text-zinc-200 px-5 mt-3 rounded h-10">
                    <LogoutLink className="text-zinc-200">Logout</LogoutLink>
                </button>
            </div>
        </main>
    );
}