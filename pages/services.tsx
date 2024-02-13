import Page from '../components/UI/Page/Page';
import Section from '../components/UI/Section/Section';
import PageHeading from '../components/UI/PageHeading/PageHeading';
import Banner from '../components/UI/Banner/Banner';

// Data
import servicesData from '../assets/data/services.json';

// Styles
import styles from '../styles/pages/services.module.scss';

const Services = () => {
    return (
        <Page
            head={{
                title: 'Services | PR Engineering',
                description: 'FIX THIS',
                canonical: '/services',
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
                <h1>We aspire to provide the <span>highest quality engineering services</span> in our chosen field of expertise to ensure excellent service delivery with cost efficient solutions <span>across Africa</span>.</h1>
            </Banner>

            <Section
                heading="Mechanical Engineering"
                number={2}
                className={styles.category}
                colour="dark"
            >
                <ul className={styles.list}>
                    {servicesData.filter(data => data.area === 'Mechanical')[0].categories.map((category, j) => (
                        <li key={j}>
                            <i className="icon-square" />
                            {category}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section
                heading="Electrical &amp; Electronic Engineering"
                number={3}
                className={styles.category}
            >
                <ul className={styles.list}>
                    {servicesData.filter(data => data.area === 'Electrical & Electronic')[0].categories.map((category, j) => (
                        <li key={j}>
                            <i className="icon-square" />
                            {category}
                        </li>
                    ))}
                </ul>
            </Section>



            <Section
                heading="Fire Engineering"
                number={4}
                className={styles.category}
                colour="dark"
            >
                <ul className={styles.list}>
                    {servicesData.filter(data => data.area === 'Fire')[0].categories.map((category, j) => (
                        <li key={j}>
                            <i className="icon-square" />
                            {category}
                        </li>
                    ))}
                </ul>
            </Section>
        </Page >
    )
}

export default Services
