import Section from '@components/UI/Section/Section';
import Button from '@components/UI/Button/Button';
import Contact from '@components/Content/Contact/Contact';
import ProjectsGrid from '@components/Content/ProjectsGrid/ProjectsGrid'
import Banner from '@components/UI/Banner/Banner'
import servicesData from '../../assets/data/services.json';
import styles from './home.module.scss';
import Icon from '@components/UI/Icon/Icon';
import { generateCustomMetaData } from '@utils/metadata';
import MapOfAfricaImage from '@static/images/pages/home/overview.png';
import Image from 'next/image';
import { getProjects } from '@lib/sanity';

export const metadata = generateCustomMetaData({
  title: 'PR Engineering',
  description: 'PR Engineering is a Dynamic and Experienced Consulting Engineering Firm offering Professional Value-Driven Consulting Engineering Solutions.',
});

const Home = async () => {
  const projects = await getProjects();
  const homePageProjects = projects.filter(project => project.home === true);

  return (
    <main className={styles.HomePage}>
      <section className={styles.landing}>
        <video autoPlay muted={true} loop={true} >
          <source src={'/videos/landing1.mp4'} type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <div className="container">
            <div className={styles.content}>
              <h1>PR Engineering<sup>™</sup></h1>
              <hr />
              <h2>Mechanical, Fire and Electrical Engineers</h2>
              <div className={styles.actions}>
                <Button link="/services">What We Do</Button>
                <Button link="/contact">Get In Touch</Button>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
              <Icon name="instagram" size={20} />
            </a>
            <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
              <Icon name="linkedin" size={20} />
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
          <Button link="/about" >Learn More</Button>
        </div>
        <div className={styles.image}>
          <Image
            alt="Map of Africa"
            priority
            src={MapOfAfricaImage}
            fill
          />
        </div>
      </Section>

      <Section
        heading="Featured Projects"
        number={2}
        colour="light"
      >
        <ProjectsGrid projects={homePageProjects} />
      </Section>

      <Banner
        img="/static/images/pages/home/banner.png"
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
                    <Icon name="square" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.more}>
          <Button link="/services" >All Services</Button>
        </div>
      </Section>

      <Section
        heading="Get In Touch"
        number={4}
      >
        <Contact />
      </Section>
    </main>
  )
}

export default Home

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await await client.query({
//     query: gql`
//           query GetProjects {
//             allProject (where: {home: {eq: true}}) {
//                 title
//                 location
//                 slug {
//                 current
//                 }
//                 thumbnail {
//                 asset {
//                     url
//                 }
//                 }
//             }
//             }
//         `,
//   });


//   return {
//     props: {
//       projects: data.allProject
//     }
//   }
// }