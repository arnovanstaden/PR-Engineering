// Components
import Button from '@components/UI/Button/Button';

// Styles
import styles from './styles.module.scss';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Page not found.',
  robots: {
    index: false,
  }
}

const PageNotFound = () => {
  return (
    <main className={styles.PageNotFound} >
      <div className={styles.error}>
        <h1>4</h1>
        <h4>0</h4>
        <h1>4</h1>
      </div>
      <p>The page you are looking for does not exist.</p>
      <Button link="/">Go Home</Button>
    </main>
  )
}

export default PageNotFound
