import Layout from '../Components/Layout'
const ProductPage = () => {
    return (
        <Layout>
            {/* First Section */}
            <section className='bg-gray-200 flex items-center justify-center flex-wrap pb-5'>
                <div className='w-[50%] text-center'>
                    <div>
                        <h1 className='test-gray-200 font-serif text-3xl'> Testy and </h1>
                        <h1 className='text-yellow-300 font-mono italic text-6xl font-bold'>Fresh</h1>
                        <p className='text-gray-400 text-xl md:w-[45%] m-auto'>A mango is an edible stone fruit

                            produced by the tropical tree

                            Mangifera indica.</p>
                    </div>
                    <div className="flex items-center justify-center m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-star-fill text-gray-300 ml-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                    <button className='border-2 rounded-2xl border-yellow-300 px-28 py-5 font-semibold text-3xl shadow-xl shadow-gray-500'>BUY NOW</button>
                </div>
                <div className='w-[50%] text-end'>
                    <img src="/shop/1.jfif" alt="" className='h-[500px] w-[700px] opacity-[2] rounded-l-[80px]' />
                </div>
            </section>

            {/* Product Section */}
            <section className="text-gray-600 body-font ">
                <div className="container w-[90%] px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/2.webp" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/3.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/4.jfif" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/5.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/6.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/7.webp" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/8.jfif" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/9.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shoppage flex items-center justify-center flex-wrap bg-gray-200">
                <div className='w-1/2 text-center text-white'>
                    <h1 className='test-gray-200 font-mono text-4xl'> Testy and </h1>
                    <h1 className='text-yellow-300 font-mono italic text-6xl font-bold'>Fresh</h1>
                    <p className='text-gray-100 text-2xl md:w-[50%] m-auto'>A mango is an edible stone fruit

                        produced by the tropical tree

                        Mangifera indica.</p>
                </div>
                <div className='w-1/2'>
                    <img src="/shop/11.png" alt="" />
                </div>
            </section>

            <section className="text-gray-600 body-font ">
                <div className="container w-[90%] px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/2.webp" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/3.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/4.jfif" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/5.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/6.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/7.webp" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/8.jfif" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-[30%] p-4 w-[80%]">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/shop/9.jpg" />
                            </a>
                            <div className="mt-4 ">
                                <div className='flex items-center gap-10'>
                                    <h2 className="text-yellow-300 title-font text-xl font-medium font-sans">Fresh</h2>
                                    <div className='flex items-center justify-center text-3xl font-semibold'>
                                        <h1>4.3</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-yellow-300 ml-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className='border-2 rounded-2xl border-yellow-300 px-8 py-0 mt-3 font-semibold text-xl shadow-xl shadow-gray-500'>Add Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shoppage1 bg-gray-200">
                <div className=' flex items-end justify-center px-6 text-white'>
                    <div className='mt-12 w-[30%]'>
                        <h1 className='test-gray-200 font-mono text-4xl'> Testy and </h1>
                        <h1 className='text-yellow-300 font-mono italic text-6xl font-bold'>Fresh</h1>
                        <p className='text-gray-100   text-2xl'>A mango is an edible stone fruit

                            produced by the tropical tree

                            Mangifera indica.</p>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default ProductPage