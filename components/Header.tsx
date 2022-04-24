import { BellIcon, SearchIcon, BriefcaseIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {if (window.scrollY > 0) {setIsScrolled(true)} else {setIsScrolled(false)}}
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.addEventListener('scroll', scrollHandler);
        };
    }, [])

    return (
        <header className={`${isScrolled && "bg-[#141414]"} w-screen`}>
            <div className="flex items-center space-x-2 md:space-x-10" >
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden md:flex px-4">
                    <li className="headerLink mx-3">Home</li>
                    <li className="headerLink mx-3">TV Shows</li>
                    <li className="headerLink mx-3">Movies</li>
                    <li className="headerLink mx-3">New &amp; Popular</li>
                    <li className="headerLink mx-3">My list </li>
                </ul>
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden sm:inline h-6 w-6" />
                <p className="hidde lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account">
                    <BriefcaseIcon className="cursor-poiner h-6 w-6"/>
                </Link>
            </div>
        </header>
    )
}

export default Header
