import Page from "../components/UI/Page/Page";
import Section from "../components/UI/Section/Section";
import PageHeading from "../components/UI/PageHeading/PageHeading";
import Banner from "../components/UI/Banner/Banner"

// Styles
import styles from "../styles/pages/services.module.scss";

const Services = () => {
    return (
        <Page
            head={{
                title: "Services | PR Engineering",
                description: "FIX THIS",
                canonical: "/services",
            }}
            className={styles.services}
        >
            <PageHeading>
                <h1>Our <span>Services</span>.</h1>
            </PageHeading>

            <Section
                heading="Professional Services"
                number={1}
                className={styles.intro}
            >
                <div className={styles.content}>
                    <h2>The scope of our professional services comprises:</h2>
                    <ul className={styles.list}>
                        <li>
                            <i className="icon-arrow"></i>
                            Feasibility Studies &amp; Reports and Planning Proposals
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Concept and Detailed Project Designs &amp; Drawings
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Equipment Selection &amp; Specifications
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Economic Evaluation &amp; Cost Estimation
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Tender Documentation &amp; Tender Adjudication
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Engineering Project Management Testing
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Commissioning &amp; Quality Reports
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Close-out and Maintenance Documentation
                        </li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>We offer these services in all market sectors including:</h2>
                    <ul className={styles.list}>
                        <li>
                            <i className="icon-arrow"></i>
                            Commercial Office Buildings
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Shopping Centres
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Schools, Colleges &amp; Universities
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Sports &amp; Recreation Facilities
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Residential Housing
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Industrial Buildings &amp; Factories
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Hospitals, Clinics &amp; Laboratories
                        </li>
                        <li>
                            <i className="icon-arrow"></i>
                            Hotels &amp; Lodges.
                        </li>
                    </ul>

                </div>
            </Section>

            <Banner
                img="/images/pages/services/banner.png"
            >
                <h1>Another cool phrase here with the full list of <span>services going underneath</span>.</h1>
            </Banner>
        </Page>
    )
}

export default Services
