import Image from "next/image";
import Link from "next/link";

const NavLinks = [  
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts" },
];

export default function Header() {
    return (
    <header className="flex items-center justify-between py-4 px-7 border-b">
        <Link href="/">
            <Image 
            src="/logo.png" 
            alt="Logo" 
            className="w-[50px] h-[50px] rounded"
            width={50} 
            height={50} 
            />
        </Link>

        <nav>
            <ul className="flex gap-x-5 text-[14px]">
                {NavLinks.map((link) => (
                    <li key={link.href}>
                        <Link className="text-zinc-800 hover:text-zinc-500" href={link.href}>{link.label}</Link>
                    </li>    
                ))}
            </ul>
        </nav>
    </header>
    );
}