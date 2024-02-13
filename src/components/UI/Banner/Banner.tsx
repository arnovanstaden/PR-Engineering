import ClassNames from 'classnames';

import styles from './banner.module.scss'
import Image from 'next/image';
import Container from '../Container/Container';

interface IProps {
  children: React.ReactNode;
  dark?: boolean
  img: string
  blur?: boolean
}

const Banner = ({ children, dark, img }: IProps) => {
  const classes = ClassNames(
    styles.banner,
    dark ? styles.dark : null
  )

  return (
    <div className={classes}>
      <Container>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.image}>
        <div className={styles.overlay} />
        <Image
          src={img}
          alt="Banner Image"
          fill
        />
      </div>
    </div>
  )
}

export default Banner
