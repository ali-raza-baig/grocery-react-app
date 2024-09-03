import Layout from "../Components/Layout"
import { Link } from "react-router-dom"
const AboutUs = () => {
    return (
        <Layout>
            <section className="about-hero text-white">
                <h1 className="text-center text-5xl italic font-medium p-10">About Us</h1>
                <p className="text-center text-2xl md:w-96 m-auto">TextFree is a mobile application and web service

                    that allows users to send and receive text

                    messages, as well as make and receive

                    VoIP phone calls, for free over .</p>
            </section>

            {/* second section */}
            <section className="flex items-center justify-center flex-wrap md:m-5">
                <div className="w-[23%]">
                    <img src="/Image/Pics/3.jfif" alt="" className="h-[350px] w-[250px] object-cover" />
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-medium">Free Text Online</h1>
                        <p className="text-gray-500">TextFree is a mobile application and web service</p>
                        <Link className="underline text-xl text-gray-500" to={'/about'}>See More ...</Link>
                    </div>
                </div>
                <div className="w-[23%]">
                    <img src="/Image/Pics/4.jfif" alt="" className="h-[350px] w-[250px] object-cover" />
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-medium">Free Text Online</h1>
                        <p className="text-gray-500">TextFree is a mobile application and web service</p>
                        <Link className="underline text-xl text-gray-500" to={'/about'}>See More ...</Link>
                    </div>
                </div>
                <div className="w-[23%]">
                    <img src="/Image/Pics/5.jfif" alt="" className="h-[350px] w-[250px] object-cover" />
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-medium">Free Text Online</h1>
                        <p className="text-gray-500">TextFree is a mobile application and web service</p>
                        <Link className="underline text-xl text-gray-500" to={'/about'}>See More ...</Link>
                    </div>
                </div>

                <div className="text-center md:w-[30%]">
                    <h1 className="text-2xl font-medium">Free Text Online</h1>
                    <p className="text-gray-500"> TextFree is a mobile application and web service.TextFree is a mobile application and

                        web service that allows users to send

                        and receive text messages, as well as

                        make and receive VoIP phone calls, for

                        free over .</p>
                    <Link to={'/about'} className="underline text-xl text-gray-500">SignUp</Link>
                </div>
            </section>

            {/* third section */}
            <section className="bg-gray-200 flex items-center justify-center flex-wrap m-5">
                <div className="w-1/2">
                    <img src="/Image/Pics/6.jfif" alt="" className="h-[600px] w-[600px]" />
                </div>
                <div className="text-center w-[50%]">
                    <h1 className="text-2xl font-medium">Free Text Online</h1>
                    <p className="text-gray-500"> TextFree is a mobile application and web service.TextFree is a mobile application and

                        web service that allows users to send

                        and receive text messages, as well as

                        make and receive VoIP phone calls, for

                        free over .</p>
                    <Link to={'/about'} className="underline text-xl text-gray-500">SignUp</Link>
                </div>
            </section>
            {/* fourth section */}
            <section className=" flex flex-row-reverse items-center justify-center flex-wrap mt-20 m-5">
                <div className="w-1/2">
                    <img src="/Image/Pics/7.jfif" alt="" className="h-[600px] w-[600px]" />
                </div>
                <div className="text-center w-[50%]">
                    <h1 className="text-2xl font-medium">Free Text Online</h1>
                    <p className="text-gray-500"> TextFree is a mobile application and web service.TextFree is a mobile application and

                        web service that allows users to send

                        and receive text messages, as well as

                        make and receive VoIP phone calls, for

                        free over .</p>
                    <Link to={'/about'} className="underline text-xl text-gray-500">SignUp</Link>
                </div>
            </section>

            {/* Services section  */}
            <section className="bg-gray-100 mt-12 p-12 ml-2">
                <div>
                    <h1 className="text-center text-4xl font-medium m-3">About service</h1>
                    <p className="text-center text-xl">TextFree is a mobile application and web service <br /> that allows users to send and receive text.</p>
                </div>
                <div className="flex items-center justify-center flex-wrap m-5">
                    <div className="">
                        <img src="/Image/Pics/8.jfif" alt="" className="h-[400px] w-[350px] object-cover m-2" />
                        <div className="text-center mt-4">
                            <h1 className="text-2xl font-medium">Free Text Online</h1>
                            <p className="text-gray-500">TextFree is a mobile application and web service</p>
                            <Link className="underline text-xl text-gray-500" to={'/about'}>See More ...</Link>
                        </div>
                    </div>
                    <div className="">
                        <img src="/Image/Pics/9.webp" alt="" className="h-[400px] w-[350px] object-cover m-2" />
                        <div className="text-center mt-4">
                            <h1 className="text-2xl font-medium">Free Text Online</h1>
                            <p className="text-gray-500">TextFree is a mobile application and web service</p>
                            <Link className="underline text-xl text-gray-500" to={'/about'}>See More ...</Link>
                        </div>
                    </div>
                    <div className="">
                        <img src="/Image/Pics/10.jfif" alt="" className="h-[400px] w-[350px] object-cover m-2" />
                        <div className="text-center mt-4">
                            <h1 className="text-2xl font-medium">Free Text Online</h1>
                            <p className="text-gray-500">TextFree is a mobile application and web service</p>
                            <Link className="underline text-xl text-gray-500" to={'/about'}>See More ...</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" flex items-center justify-center flex-wrap m-5">
                <div className="w-[60%] m-2">
                    <img src="/Image/Pics/11.jfif" alt="" className="h-[600px] w-[600px]" />
                </div>
                <div className=" w-[40%]">
                    <h1 className="text-2xl font-medium">Free Text Online</h1>
                    <p className="text-gray-500"> TextFree is a mobile application and web service.TextFree is a mobile application and

                        web service that allows users to send

                        and receive text messages, as well as

                        make and receive VoIP phone calls, for

                        free over .</p>
                    <Link to={'/about'} className="underline text-xl text-gray-500">SignUp</Link>
                </div>
            </section>
        </Layout>
    )
}

export default AboutUs