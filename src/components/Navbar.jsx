'use client'
import { useState } from "react";
import { Avatar, Button, Description, Dropdown, Header, Kbd, Label, Separator } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { ArrowShapeDown, Bars, EllipsisVertical, Pencil, SquarePlus, TrashBin } from "@gravity-ui/icons";

import ThemeToggle from "./ThemeToggle";
import { toast } from "react-toastify";


const Navbar = () => {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user;
    // console.log(user);

    const handleSignOut=async()=>{
       try {
    await authClient.signOut();

    toast.success('Sign out successful');
  } catch (error) {
    toast.error('Something went wrong');
  }
    }
    

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center gap-3 justify-between px-6">
                    <div className="flex items-center gap-2">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-700 to-purple-800 bg-clip-text text-transparent">IdeaVault</p>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        <li>
                            <Link href="/" className={` ${pathname === "/" ? "font-bold text-fuchsia-900" : ""}`}>Home</Link>
                        </li>
                        <li>
                            <Link href="/ideas" className={` ${pathname === "/ideas" ? "font-bold text-fuchsia-900" : ""}`}>Ideas</Link>
                        </li>
                        <li>
                            <Link href="/myideas" className={` ${pathname === "/myideas" ? "font-bold text-fuchsia-900" : ""}`}>My Ideas</Link>
                        </li>
                        <li>
                            <Link href="/myinteractions" className={` ${pathname === "/myinteractions" ? "font-bold text-fuchsia-900" : ""}`}>My Interactions</Link>
                        </li>
                        <li>
                            <Link href="/addideas" className={` ${pathname === "/addideas" ? "font-bold text-fuchsia-900" : ""}`}>Add Ideas</Link>
                        </li>
                    </ul>
                    <div className="flex gap-2">
                    {
                        user ?
                            <>


                                <div className="flex md:gap-2">
                                    <Avatar>
                                        <Avatar.Image referrerPolicy="no-referrer" alt="image" src={user?.image} />
                                        <Avatar.Fallback className="text-xl font-semibold text-fuchsia-900">{user?.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                    <Dropdown>
                                        <Button isIconOnly aria-label="Menu" variant="secondary">

                                            <ArrowShapeDown className="text-fuchsia-900"></ArrowShapeDown>
                                        </Button>
                                        <Dropdown.Popover>
                                            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                                <Dropdown.Section>

                                                    <Dropdown.Item id="new-file" textValue="Profile">

                                                       <Link href="/profile" className={' text-center text-fuchsia-900 font-bold'}><Button variant="outline" className={'md:w-50 rounded-none'}>Profile</Button></Link>

                                                    </Dropdown.Item>
                                                    <Dropdown.Item id="edit-file" textValue="Edit file">


                                                        <Button onClick={handleSignOut} className={'rounded-none w-full'} variant="danger">Log Out</Button>


                                                    </Dropdown.Item>
                                                </Dropdown.Section>


                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </Dropdown>
                                </div>
                            </>
                            :
                            <>
                                <ul className=" items-center md:gap-4 flex">
                                    <li>
                                        <Link href="/signin" className="no-underline"><Button variant="outline" className={pathname === "/signin" ? "bg-fuchsia-900 text-white font-bold " : "text-fuchsia-900 bg-white border-2 border-fuchsia-900 font-semibold "}>Sign In</Button></Link>
                                    </li>
                                    <li>
                                        <Link href="/register" className="no-underline"><Button variant="outline" className={pathname === "/register" ? "bg-fuchsia-900 text-white font-bold " : "text-fuchsia-900 bg-white border-2 border-fuchsia-900 font-semibold "}>Register</Button></Link>
                                    </li>
                                </ul>
                            </>
                    }
                   <ThemeToggle></ThemeToggle>
                    </div>

                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">

                            <li>
                                <Link href="/" className="no-underline block py-2">Home</Link>
                            </li>
                            <li>
                                <Link href="/ideas" className="no-underline block py-2">Ideas</Link>
                            </li>
                            <li>
                                <Link href="/myideas" className="no-underline block py-2">My Ideas</Link>
                            </li>
                            <li>
                                <Link href="/myinteractions" className="no-underline block py-2">My Interactions</Link>
                            </li>
                            <li>
                                <Link href="/addideas" className="no-underline block py-2">Add Ideas</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;