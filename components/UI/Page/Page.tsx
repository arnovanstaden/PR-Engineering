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
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Page
