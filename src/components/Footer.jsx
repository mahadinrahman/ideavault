import { GraduationCap } from '@gravity-ui/icons';
import Link from "next/link";
import Image from 'next/image';
import { Button } from '@heroui/react';

const Footer = () => {
    return (
        <footer className="relative mt-24">
            <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

            {/* Background Layer */}
            <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

            {/* Subtle Gradient Glow */}
            <div
                className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">

                            <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-700 to-purple-800 bg-clip-text text-transparent">IdeaVault</p>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">

                           IdeaVault is a web-based platform where users can share innovative startup ideas, explore ideas posted by others, and engage through comments, and discussions. 
                        </p>
                    </div>
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                            Share Your Intelegent Ideas
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            See all the features by creating an account. Join us and share your  idea!
                        </p>

                        <Link href="/register">
                            <Button className={'bg-fuchsia-900 text-white font-bold'}>Get Started</Button>
                        </Link>
                    </div>

                     <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                            Useful Links
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                   Contact info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                           Social Links
                        </h3>
                        <div className='flex space-x-2'>
                        <Image src="/fb.png" alt="Facebook" width={32} height={32} className='rounded-full'/>
                        <Image src="/insta.png" alt="Instagram" width={32} height={32} className='rounded-full'/>
                        <Image src="/x.png" alt="Twitter" width={32} height={32} className='rounded-full bg-white'/>
                        </div>
                    </div>
                    
                </div>

                {/* Divider */}
                <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Bottom */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} IdeaVault. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;