import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import SimpleReactLightbox from 'simple-react-lightbox'


const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
