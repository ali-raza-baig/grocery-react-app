import Layout from '../Components/Layout'
const ContactUs = () => {
    return (
        <Layout>
            <section className="contact-hero ">
                <h1 className='text-4xl font-serif pt-10 text-center'>Contact Us</h1>
                <p className='text-center'>TextFree is a mobile application and web <br /> service that allows users to send</p>
                <div>
                    <form className="max-w-sm mt-5 mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-xl font-medium  dark:text-white"> Name:</label>
                            <input type="text" id="text" className="bg-transparent border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name...." required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-xl font-medium  dark:text-white"> Email:</label>
                            <input type="email" id="email" className="bg-transparent border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email...." required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-xl font-medium  dark:text-white"> Password:</label>
                            <input type="password" id="password" className="bg-transparent border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Password' required />
                        </div>
                        <div className="mb-5">

                            <label htmlFor="message" className="block mb-2 text-xl font-medium dark:text-white"> Message</label>
                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm  bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} />
                        </div>
                        <div className='text-center pb-4'>
                            <button type="submit" className="text-white text-2xl bg-transparent border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-14 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </section>

        </Layout>
    )
}

export default ContactUs