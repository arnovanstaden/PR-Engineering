import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";

interface IProps {
    children: React.ReactNode;
    head: {
        title: string;
        description: string;
        canonical: string;
        robots?: boolean;
    }
}


const Page = (props: IProps) => {
    return (
        <div>
            <Head
                {...props.head}
            />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Page
