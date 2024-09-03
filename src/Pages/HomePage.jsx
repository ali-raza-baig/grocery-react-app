import Layout from '../Components/Layout'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomePage = () => {
    return (
        <Layout className="">
            <div className='bg-brownbg homepage text-white'>
                <div className="homepage-hero text-white text-center ">
                    <div className='font-semibold text-6xl italic pt-20'> Millions Of Happy</div>
                    <div className='text-2xl w-[80%] m-auto pt-5'>Send unlimited free texts and make WiFi calls from a free phone number. Download the free app or sign up online to  pick your free phone number.</div>

                </div>
                {/* Top Seller Slider  */}
                <div className="topseller text-white mb-10">
                    <h1 className='md:pl-16 mt-8 font-bold text-white text-5xl'>Top Seller</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 1 slide per view on screens up to 640px
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2, // 2 slides per view on screens up to 768px
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view on screens up to 1024px
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4, // 4 slides per view on screens 1280px and above
                                spaceBetween: 20,
                            },
                        }}
                        navigation
                        className='max-w-[100%] lg:max-w-[90%] mt-8 flex flex-wrap'
                    >
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-5 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/2.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/3.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/4.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/5.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/16.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Top Seller  */}
                <div className='top-seller-home mt-6 flex items-center'>
                    <div className='p-5'>
                        <img src="/HomePage/17.jfif" alt="" />
                    </div>
                    <div className='md:ml-40'>
                        <h1 className='text-center font-bold text-5xl'> Top Seller</h1>
                        <p className='text-center text-2xl'> “On a recent test run of all three services, Text <br />
                            Free was the fastest, most <br /> reliable and easiest to use.</p>
                    </div>
                </div>

                {/* Vegitable Section  */}
                <section className="topseller text-white mb-10">
                    <h1 className='md:pl-16 mt-8 underline font-semibold text-blackbg text-5xl'>Vegitables</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 1 slide per view on screens up to 640px
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2, // 2 slides per view on screens up to 768px
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view on screens up to 1024px
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4, // 4 slides per view on screens 1280px and above
                                spaceBetween: 20,
                            },
                        }}
                        className='max-w-[100%] lg:max-w-[100%] md:ml-28 mt-8 flex flex-wrap'
                    >
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-5 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/8.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/9.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/10.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/11.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/7.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* Coca Cola Section  */}
                <section className='md:w-[80%] m-auto bg-blackbg flex items-center justify-center flex-wrap p-6 '>
                    <div className='w-[50%]'>
                        <img src="/HomePage/15.png" alt="" className='bg-blackbg -rotate-12' />
                    </div>
                    <div>
                        <h1 className='font-semibold text-6xl'>Coca Cola</h1>
                        <p className='text-3xl'>1 litre</p>
                        <p className='text-2xl'>On a recent test run of <br /> all three services.</p>
                        <div className="text-center pt-4">
                            <button type="button" className="py-2.5 px-20 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                        </div>
                    </div>

                </section>

                {/* Softdrinks Sections */}
                <section className="topseller text-white mb-10">
                    <h1 className='md:pl-16 mt-8 underline font-semibold text-blackbg text-5xl'>Softdrinks</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // 1 slide per view on screens up to 640px
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2, // 2 slides per view on screens up to 768px
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view on screens up to 1024px
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4, // 4 slides per view on screens 1280px and above
                                spaceBetween: 20,
                            },
                        }}
                        className='max-w-[100%] lg:max-w-[100%] md:ml-28 mt-8 flex flex-wrap'
                    >
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-5 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/16.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/17.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/18.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/19.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/20.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/21.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* Gallery */}
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4  md:w-[80%] m-auto">
                        <div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/30.jfif" alt />
                            </div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/23.jfif" alt />
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <img className="h-[400px] mt-2 max-w-full rounded-lg" src="/HomePage/21.jpg" alt />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/25.jfif" alt />
                            </div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/26.jfif" alt />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fruits section */}
                <section className="topseller text-white mb-10">
                    <h1 className='md:pl-16 mt-8 underline font-semibold text-blackbg text-5xl'>Fruites</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 1 slide per view on screens up to 640px
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2, // 2 slides per view on screens up to 768px
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view on screens up to 1024px
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4, // 4 slides per view on screens 1280px and above
                                spaceBetween: 20,
                            },
                        }}
                        className='max-w-[100%] lg:max-w-[100%] md:ml-28 mt-8 flex flex-wrap'
                    >
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-5 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/29.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/31.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/32.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/34.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/33.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* Top Seller  */}
                <div className='top-seller-home  mt-6 flex items-center'>
                    <div className='p-5'>
                        <img src="/HomePage/28.jfif" alt="" className='border rounded-lg' />
                    </div>
                    <div className='md:ml-40'>
                        <h1 className='text-center font-bold text-5xl'> Top Seller</h1>
                        <p className='text-center text-2xl'> “On a recent test run of all three services, Text <br />
                            Free was the fastest, most <br /> reliable and easiest to use.</p>
                    </div>
                </div>
                {/* Gallery */}
                <section className='mt-12'>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4  md:w-[80%] m-auto">
                        <div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 object-contain rounded-lg" src="/HomePage/37.jpg" alt />
                            </div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/38.jpg" alt />
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <img className="h-[400px] mt-2 max-w-full rounded-lg" src="/HomePage/39.jpg" alt />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/40.jfif" alt />
                            </div>
                            <div>
                                <img className="h-[200px] max-w-full w-[250px] m-2 rounded-lg" src="/HomePage/41.jfif" alt />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Gradiants */}
                <section className="topseller text-white pb-10">
                    <h1 className='md:pl-16 mt-8 underline font-semibold text-blackbg text-5xl'>Gradiants</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 1 slide per view on screens up to 640px
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2, // 2 slides per view on screens up to 768px
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view on screens up to 1024px
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4, // 4 slides per view on screens 1280px and above
                                spaceBetween: 20,
                            },
                        }}
                        className='max-w-[100%] lg:max-w-[100%] md:ml-28 mt-8 flex flex-wrap'
                    >
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-5 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/38.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/39.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/40.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/41.jfif" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container px-5 py-4 m-3 mx-2 border rounded-2xl bg-blackbg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/HomePage/42.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">Lorem ipsum dolor sit amet.</p>
                                    <div className="text-center pt-4">
                                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-xl border border-yellowbg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>


            </div>

        </Layout>
    )
}

export default HomePage