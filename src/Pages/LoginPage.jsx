import Layout from "../Components/Layout"

const LoginPage = () => {
    return (
        <Layout>
            <section className="bg-gray-100 flex items-center justify-center flex-wrap">
                <div className="w-[48%] m-2 sm:m-2">
                    <h1 className=" text-center text-3xl mb-10 font-mono font-semibold">User Login</h1>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email:</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email..." required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password:</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" required />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </form>

                </div>
                <div className="loginpage h-screen w-[100%] md:w-[50%] flex items-center justify-center flex-col text-white">
                    <h1 className="text-center text-4xl font-mono font-semibold ">Welcome to Website</h1>
                    <p className="text-center w-[60%] text-xl">TextFree is a mobile application and web service

                        that allows users to send and receive text

                        messages, as well as make and receive

                        VoIP phone calls, for free over the</p>
                </div>
            </section>
        </Layout>
    )
}

export default LoginPage