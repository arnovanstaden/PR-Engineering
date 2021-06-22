import Link from "next/link";
import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";

// Components
import Page from "../components/UI/Page/Page";
import Section from "../components/UI/Section/Section";
import Button from "../components/UI/Button/Button";
import Contact from "../components/Content/Contact/Contact";
import ProjectsGrid from "../components/Content/ProjectsGrid/ProjectsGrid"
import Banner from "../components/UI/Banner/Banner"

// Data
import servicesData from "../assets/data/services.json";

// styles
import styles from "../styles/pages/home.module.scss"

const Home = ({ projects }) => {

    return (
        <Page
            head={{
                title: "PR Engineering",
                description: "PR Engineering is a Dynamic and Experienced Consulting Engineering Firm offering Professional Value-Driven Consulting Engineering Solutions.",
                canonical: "/",
            }}
            className={styles.home}
        >

            <section className={styles.landing}>
                <video autoPlay muted={true} loop={true} >
                    <source src={`/videos/landing1.mp4`} type="video/mp4" />
                </video>
                <div className={styles.overlay}>
                    <div className="container">
                        <div className={styles.content}>
                            <h1>PR Engineering<sup>™</sup></h1>
                            <hr />
                            <h2>Mechanical, Fire and Electrical Engineers</h2>
                            <div className={styles.actions}>
                                <Button text="What We Do" link="/services" />
                                <Button text="Get In Touch" link="/contact" />
                            </div>
                            <div className={styles.actions}>
                                <Link href="2">
                                    <button className={styles.videoButton} >Home Video 2</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
                            <i className="icon-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
                            <i className="icon-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>

            <Section
                heading="Professional Value-Driven Consulting Engineering Solutions"
                number={1}
                className={styles.intro}
            >
                <div className={styles.text}>
                    <p>PR Engineering is a dynamic and experienced consulting engineering firm with the capacity to provide comprehensive and value-driven design and project management services. As providers of engineering solutions to clients in the property, commercial and industrial markets, our dedicated and professional team of engineering specialists have built a reputation for providing viable, durable and cost-effective solutions to meet challenging project requirements throughout Africa.</p>
                    <Button text="Learn More" link="/about" />
                </div>
                <div className={styles.image}>
                    <img src="/images/pages/home/overview.png" alt="Map of Africa" />
                </div>
            </Section>

            <Section
                heading="Projects We've Undertaken In The Past"
                number={2}
                colour="light"
            >
                <ProjectsGrid projects={projects} />
            </Section>

            <Banner
                img="/images/pages/home/banner.png"
            >
                <h1>We aim to ensure excellent <span>service delivery</span> with <span>cost efficient</span> solutions across <span>Africa</span>.</h1>
            </Banner>

            <Section
                heading="Services We Offer"
                number={3}
                colour="dark"
                className={styles.services}
            >
                <div className={styles.grid}>
                    {servicesData.map((service, i) => (
                        <div className={styles.area} key={i}>
                            <h2>{service.area}</h2>
                            <ul className={styles.list}>
                                {service.categories.map((category, j) => (
                                    <li key={j}>
                                        <i className="icon-square" />
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles.more}>
                    <Button text="All Services" link="/services" />
                </div>
            </Section>

            <Section
                heading="Get In Touch"
                number={4}
            >
                <Contact />
            </Section>
        </Page >
    )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await await client.query({
        query: gql`
          query GetProjects {
            allProject (where: {home: {eq: true}}) {
                title
                location
                slug {
                current
                }
                thumbnail {
                asset {
                    url
                }
                }
            }
            }
        `,
    });


    return {
        props: {
            projects: data.allProject
        }
    }
}