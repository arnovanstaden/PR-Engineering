import Page from '../components/UI/Page/Page';
import Button from '../components/UI/Button/Button';

// Styles
import styles from '../styles/pages/404.module.scss';

const PageNotFound = () => {
  return (
    <Page
      head={{
        title: 'Page Not Found',
        description: 'Page Not Found',
        canonical: '/404',
        robots: false
      }}
      className={styles.pageNotFound}
    >
      <h1>4<span>0</span>4</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button link="/" >Go Home</Button>
    </Page>
  )
}

export default PageNotFound
