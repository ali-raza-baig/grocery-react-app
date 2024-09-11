import { Button, Navbar } from "flowbite-react";

const Navbarr = () => {
    return (
        <>
            <Navbar fluid className="bg-blackbg border-b-2 border-gray-200">
                <Navbar.Brand href="/">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-gray-50">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className="border rounded-lg border-gray-300" href="/login">Login</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active className="hover:bg-black">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about" className="text-gray-50 hover:text-gray-900">About</Navbar.Link>
                    <Navbar.Link href="/shop" className="text-gray-50 hover:text-gray-900">Shop</Navbar.Link>
                    <Navbar.Link href="/contact" className="text-gray-50 hover:text-gray-900">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navbarr