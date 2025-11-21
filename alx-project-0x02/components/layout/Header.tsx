import Link from "next/link";
import React from "react";


export default function Header(){
    return(
        <header className="bg-blue-100 shadow-md ">
            <nav className="flex gap-4">
                <Link href="/home" className="hover:underline text-blue-600">Home</Link>
                <Link href="/about" className="hover:underline text-blue-600">About</Link>
                <Link href="/post" className="hover:underline text-blue-600">posts</Link>
            </nav>
        </header>
    );
}