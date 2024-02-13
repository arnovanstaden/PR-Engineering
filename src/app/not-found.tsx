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

const NotFound = () => {
  return (
    <main className={styles.PageNotFound} >
      <h1>4<span>0</span>4</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button link="/" >Go Home</Button>
    </main>
  )
}

export default NotFound
