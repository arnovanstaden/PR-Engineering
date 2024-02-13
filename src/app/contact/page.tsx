import Contact from '@components/Content/Contact/Contact'
import PageHeading from '@components/UI/PageHeading/PageHeading';
import styles from './contact.module.scss';
import { Metadata } from 'next';
import Container from '@components/UI/Container/Container';

export const metadata: Metadata = {
  title: 'Contact | PR Engineering',
  description: 'Get in touch with PR Engineering today.',
}

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
