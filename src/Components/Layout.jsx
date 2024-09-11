import Navbarr from './Navbar'
import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <>
            <Navbarr />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout