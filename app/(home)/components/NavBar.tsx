import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const NavBar = () => {
    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/chithindocha",
            icon: <FaGithub />,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/chithindocha/",
            icon: <FaLinkedin />,
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/chithindocha1393/",
            icon: <FaCode />,
        },
    ];

    return (
        <nav className='flex justify-between items-center py-10'>
            <h1 className='text-white text-4xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom'>Chit</h1>
            <div className="flex justify-center gap-4">
                {socials.map((social) => (
                    <button
                        key={social.name}
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform transition-transform duration-300 ease-in-out hover:scale-125"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <Link href={social.url} className="text-white text-xl hover:text-gray-400 flex items-center">
                                {social.icon}
                            </Link>
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;