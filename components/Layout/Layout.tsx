import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
