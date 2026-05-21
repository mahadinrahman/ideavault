'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <section>
            <Swiper navigation
                pagination={{ clickable: true }} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
                        {/* Overlay */}
                        <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
                            <div className="max-w-7xl mx-auto px-6 text-white">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl">
                                   Share Your Startup Ideas 💡
                                </h1>
                                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                                    Post your innovative ideas and let the community discover them

                                </p>

                                <div className="flex gap-4">
                                    <Link href="/addideas">
                                        <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                                            Share Ideas
                                        </Button>
                                    </Link>

                                    <Link href="/ideas">
                                        <Button variant="outline" className="text-white">
                                            View Ideas
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
                        {/* Overlay */}
                        <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
                            <div className="max-w-7xl mx-auto px-6 text-white">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl">
                                    Collaborate & Validate 🤝
                                </h1>
                                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                                    Get feedback, comments, and improve your ideas together

                                </p>

                                <div className="flex gap-4">
                                    <Link href="/addideas">
                                        <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                                            Share Ideas
                                        </Button>
                                    </Link>

                                    <Link href="/ideas">
                                        <Button variant="outline" className="text-white">
                                            View Ideas
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
                        {/* Overlay */}
                        <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
                            <div className="max-w-7xl mx-auto px-6 text-white">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl">
                                    Build the Future 🚀
                                </h1>
                                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                                   Turn ideas into reality with community-driven innovation

                                </p>

                                <div className="flex gap-4">
                                    <Link href="/addideas">
                                        <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                                            Share Ideas
                                        </Button>
                                    </Link>

                                    <Link href="/ideas">
                                        <Button variant="outline" className="text-white">
                                            View Ideas
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;