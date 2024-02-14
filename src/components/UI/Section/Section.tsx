import ClassNames from 'classnames';

// Styles
import styles from './section.module.scss';
import Container from '../Container/Container';

interface IProps {
  children: React.ReactNode;
  heading?: string;
  colour?: 'light' | 'dark';
  number?: number;
  className?: string;
}

const Section = ({ children, colour, heading, number, className }: IProps) => {
  const classes = ClassNames(
    styles.section,
    colour === 'light' ? styles.light : null,
    colour === 'dark' ? styles.dark : null,
  )

  return (
    <section className={classes}>
      <div className={styles.grid}>
        <div className={styles.number}>
          <h5>0{number}</h5>
        </div>
        <div className={styles.content}>
          <Container>
            {heading ?
              <div className={styles.heading}>
                <h1>{heading}</h1>
                <hr />
              </div>
              : null}
            <div className={className}>
              {children}
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Section
