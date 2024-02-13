import ClassNames from 'classnames';

import styles from './banner.module.scss'

interface IProps {
  children: React.ReactNode;
  dark?: boolean
  img: string
  blur?: boolean
}

const Banner = ({ children, dark }: IProps) => {
  const classes = ClassNames(
    styles.banner,
    dark ? styles.dark : null
  )

  return (
    <div className={classes}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.grid}>
            <div></div>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Banner
