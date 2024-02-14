import Contact from '@components/Content/Contact/Contact'
import PageHeading from '@components/UI/PageHeading/PageHeading';
import styles from './contact.module.scss';
import Container from '@components/UI/Container/Container';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Contact | PR Engineering',
  description: 'Looking to get in touch? Find our contact details here or send us a message and we\'ll get back.',
});

const ContactPage = () => {
  return (
    <main className={styles.ContactPage}>
      <PageHeading>
        <h1><span>Contact</span> us.</h1>
      </PageHeading>

      <section className={styles.content}>
        <Container>
          <Contact />

          <div className={styles.map}>
            <iframe src="https://snazzymaps.com/embed/161128"></iframe>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default ContactPage
