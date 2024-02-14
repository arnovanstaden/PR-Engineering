import ClassNames from 'classnames';

// Styles
import styles from './section.module.scss';
import Container from '../Container/Container';

interface IProps {
  children: React.ReactNode;
  heading?: string;
  colour?: 'light' | 'dark';
  className?: string;
}

const Section = ({ children, colour, heading, className }: IProps) => {
  const classes = ClassNames(
    styles.section,
    colour === 'light' ? styles.light : null,
    colour === 'dark' ? styles.dark : null,
  )

  return (
    <section className={classes}>
      <Container className={styles.content}>
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
    </section>
  )
}

export default Section
