import Page from "../../components/UI/Page/Page";
import { GetStaticProps } from 'next'


// Styles
import styles from "../../styles/pages/projects/[name].module.scss";

const Project = () => {
    return (
        <Page
            head={{
                title: "About | PR Engineering",
                description: "FIX THIS",
                canonical: "/about",
            }}
            className={styles.about}
        >

        </Page>
    )
}

export default Project

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    return {
        props: {
            posts,
        },
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { ... } } // See the "paths" section below
//         ],
//         fallback: true or false // See the "fallback" section below
//     };
// }