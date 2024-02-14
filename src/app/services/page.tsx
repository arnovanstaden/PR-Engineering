import Section from '@components/UI/Section/Section';
import PageHeading from '@components/UI/PageHeading/PageHeading';
import Banner from '@components/UI/Banner/Banner';
import servicesData from '../../assets/data/services.json';
import styles from './services.module.scss';
import Icon from '@components/UI/Icon/Icon';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Services | PR Engineering',
  description: 'PR Engineering provides comprehensive value engineering services for any scale project in and around Africa.',
});

const Services = () => {
  return (
    <main className={styles.ServicesPage}>
      <PageHeading>
        <h1>Our <span>Services</span>.</h1>
      </PageHeading>

      <Section
        heading="Professional Services"
        className={styles.intro}
      >
        <div className={styles.content}>
          <h2>The scope of our professional services comprises:</h2>
          <ul className={styles.list}>
            <li>
              <Icon name="exit_to_app" />
              Feasibility Studies &amp; Reports and Planning Proposals
            </li>
            <li>
              <Icon name="exit_to_app" />
              Concept and Detailed Project Designs &amp; Drawings
            </li>
            <li>
              <Icon name="exit_to_app" />
              Equipment Selection &amp; Specifications
            </li>
            <li>
              <Icon name="exit_to_app" />
              Economic Evaluation &amp; Cost Estimation
            </li>
            <li>
              <Icon name="exit_to_app" />
              Tender Documentation &amp; Tender Adjudication
            </li>
            <li>
              <Icon name="exit_to_app" />
              Engineering Project Management Testing
            </li>
            <li>
              <Icon name="exit_to_app" />
              Commissioning &amp; Quality Reports
            </li>
            <li>
              <Icon name="exit_to_app" />
              Close-out and Maintenance Documentation
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h2>We offer these services in all market sectors including:</h2>
          <ul className={styles.list}>
            <li>
              <Icon name="exit_to_app" />
              Commercial Office Buildings
            </li>
            <li>
              <Icon name="exit_to_app" />
              Shopping Centres
            </li>
            <li>
              <Icon name="exit_to_app" />
              Schools, Colleges &amp; Universities
            </li>
            <li>
              <Icon name="exit_to_app" />
              Sports &amp; Recreation Facilities
            </li>
            <li>
              <Icon name="exit_to_app" />
              Residential Housing
            </li>
            <li>
              <Icon name="exit_to_app" />
              Industrial Buildings &amp; Factories
            </li>
            <li>
              <Icon name="exit_to_app" />
              Hospitals, Clinics &amp; Laboratories
            </li>
            <li>
              <Icon name="exit_to_app" />
              Hotels &amp; Lodges.
            </li>
          </ul>

        </div>
      </Section>

      <Banner
        img="/static/images/pages/services/banner.png"
      >
        <h1>We aspire to provide the <span>highest quality engineering services</span> in our chosen field of expertise to ensure excellent service delivery with cost efficient solutions <span>across Africa</span>.</h1>
      </Banner>

      <Section
        heading="Mechanical Engineering"
        className={styles.category}
        colour="dark"
      >
        <ul className={styles.list}>
          {servicesData.filter(data => data.area === 'Mechanical')[0].categories.map((category, j) => (
            <li key={j}>
              <Icon name="square" />
              {category}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        heading="Electrical &amp; Electronic Engineering"
        className={styles.category}
      >
        <ul className={styles.list}>
          {servicesData.filter(data => data.area === 'Electrical & Electronic')[0].categories.map((category, j) => (
            <li key={j}>
              <Icon name="square" />
              {category}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        heading="Fire Engineering"
        className={styles.category}
        colour="dark"
      >
        <ul className={styles.list}>
          {servicesData.filter(data => data.area === 'Fire')[0].categories.map((category, j) => (
            <li key={j}>
              <Icon name="square" />
              {category}
            </li>
          ))}
        </ul>
      </Section>
    </main >
  )
}

export default Services
