import PageHeading from '@components/UI/PageHeading/PageHeading';
import Section from '@components/UI/Section/Section';
import Banner from '@components/UI/Banner/Banner'
import styles from './about.module.scss';
import Image from 'next/image';
import MapOfAfricaImage from '@static/images/pages/home/overview.png';
import { generateCustomMetaData } from '@utils/metadata';
import Team from '@components/Content/Team';

export const metadata = generateCustomMetaData({
  title: 'About | PR Engineering',
  description: 'Learn more about what sets us apart, our history & values, our memberships and our amazing team.',
});

const About = () => {
  return (
    <main className={styles.AboutPage}>
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
        <div className={styles.image}>
          <Image
            alt="Map of Africa"
            priority
            src={MapOfAfricaImage}
          />
        </div>
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

      <Banner
        img="/static/images/pages/about/banner.png"
        dark
      >
        <h1>Another cool phrase here with some <span>highlighted keywords</span>.</h1>
      </Banner>

      <Section
        heading="Our Memberships"
        number={3}
        className={styles.memberships}
      >
        <Image
          src="/static/images/pages/about/ECSA-Logo.png"
          alt="ECSA-Logo"
          width={200}
          height={90}
        />
        <Image
          src="/static/images/pages/about/GBCSA-Logo.png"
          alt="GBCSA-Logo"
          width={200}
          height={90}
        />
        <Image
          src="/static/images/pages/about/ASHRAE-Logo.png"
          alt="SAIMECHE-Logo"
          width={200}
          height={90}
        />
        <Image
          src="/static/images/pages/about/SAIRAC_2012_web.png"
          alt="SAIMECHE-Logo"
          width={200}
          height={90}
        />
        <Image
          src="/static/images/pages/about/revit-logo.png"
          alt="SAIMECHE-Logo"
          width={200}
          height={90}
        />
        <Image
          src="/static/images/pages/about/AutoCAD-logo.png"
          alt="SAIMECHE-Logo"
          width={200}
          height={90}
        />
      </Section>

      <Section
        heading="Our Team"
        number={4}
        colour="light"
        className={styles.team}
      >
        <Team />
      </Section>
    </main>
  )
}

export default About
