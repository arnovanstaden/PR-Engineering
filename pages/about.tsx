// Components
import Page from "../components/UI/Page/Page";
import PageHeading from "../components/UI/PageHeading/PageHeading";
import NextImage from "../components/UI/NextImage/NextImage";
import Section from "../components/UI/Section/Section";

// Styles
import styles from "../styles/pages/about.module.scss";

const About = () => {
    return (
        <Page
            head={{
                title: "About | PR Engineering",
                description: "FIX THIS",
                canonical: "/about",
            }}
            className={styles.about}
        >
            <PageHeading>
                <h1><span>About</span> Us.</h1>
            </PageHeading>

            <Section
                heading="Company Overview"
                number={1}
                className={styles.overview}
            >
                <div className={styles.text}>
                    <p>PR Engineering is a dynamic and experienced consulting engineering firm with the capacity to provide comprehensive and value-driven design and project management services. As providers of engineering solutions to clients in the property, commercial and industrial markets, our dedicated and professional team of engineering specialists have built a reputation for providing viable, durable and cost-effective solutions to meet challenging project requirements throughout Africa.</p>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <h2>Our Mission</h2>
                            <p>We aspire to provide the highest quality engineering services in our chosen field of expertise to ensure excellent service delivery with cost efficient solutions across Africa.</p>
                        </div>
                        <div className={styles.item}>
                            <h2>Our Vision</h2>
                            <p>To deliver Professional Value-Driven Consulting Engineering solutions in the Engineering industry.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.image}></div>
            </Section>

            <Section
                heading="Our Values"
                number={2}
                colour="dark"
                className={styles.values}
            >
                <div className={styles.value}>
                    <h2>Commitment</h2>
                    <p>We commit to deliver work of the highest quality that would build trust with our clients.</p>
                </div>
                <div className={styles.value}>
                    <h2>Inspiration</h2>
                    <p>We endeavour to demonstrate our passion for continuous improvement and work excellence.</p>
                </div>
                <div className={styles.value}>
                    <h2>Innovation</h2>
                    <p>We strive to remain and be at the forefront of technical innovation through training, skills development and implementation of technical knowledge and software for effective modern design in the infrastructure.</p>
                </div>
                <div className={styles.value}>
                    <h2>Loyalty</h2>
                    <p>We seek to build a brighter future and to assist in improving the lives of all South Africa.</p>
                </div>
            </Section>

            <Section
                heading="Our Memberships"
                number={1}
                className={styles.memberships}
            >
                <img src="/images/pages/about/ECSA-Logo.png" alt="ECSA-Logo" />
                <img src="/images/pages/about/GBCSA-Logo.png" alt="GBCSA-Logo" />
                <img src="/images/pages/about/SAIMECHE-Logo.png" alt="SAIMECHE-Logo" />
            </Section>

            <Section
                heading="Our Team"
                number={4}
                colour="light"
                className={styles.team}
            >
                <article className={styles.member}>
                    <div className={styles.image}>
                        <NextImage
                            src="/images/pages/about/team/team.jpg"
                            alt="Paul van Staden"
                            width={400}
                            background
                            alignTop
                        />
                    </div>
                    <div className={styles.details}>
                        <h2>Jaco Buys</h2>
                        <h3>Director</h3>
                        <div>
                            <i className="icon-email"></i>
                            <a href="mailto:jaco@engpr.com">jaco@engpr.com</a>
                        </div>
                    </div>
                    <div className={styles.bio}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nemo labore? In perferendis doloremque similique laudantium, provident quo aliquam ratione optio necessitatibus dicta excepturi nam ad, atque facere libero sequi sapiente? Labore illum nisi cupiditate asperiores voluptate nesciunt, porro omnis? Dolores dicta perferendis dolore soluta maiores sit nemo aliquid temporibus!
                        </p>
                    </div>
                </article>

                <article className={styles.member}>
                    <div className={styles.image}>
                        <NextImage
                            src="/images/pages/about/team/team.jpg"
                            alt="Paul van Staden"
                            width={400}
                            background
                            alignTop
                        />
                    </div>
                    <div className={styles.details}>
                        <h2>Paul van Staden</h2>
                        <h3>Director</h3>
                        <div>
                            <i className="icon-email"></i>
                            <a href="mailto:paul@engpr.com">paul@engpr.com</a>
                        </div>
                    </div>
                    <div className={styles.bio}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nemo labore? In perferendis doloremque similique laudantium, provident quo aliquam ratione optio necessitatibus dicta excepturi nam ad, atque facere libero sequi sapiente? Labore illum nisi cupiditate asperiores voluptate nesciunt, porro omnis? Dolores dicta perferendis dolore soluta maiores sit nemo aliquid temporibus!
                        </p>
                    </div>
                </article>

            </Section>

        </Page>
    )
}

export default About
