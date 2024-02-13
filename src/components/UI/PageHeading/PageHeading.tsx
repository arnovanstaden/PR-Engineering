import ClassNames from 'classnames';

// Styles
import styles from './heading.module.scss';
import Container from '../Container/Container';

interface IProps {
  children: React.ReactNode,
  dark?: boolean;
}

const PageHeading = ({ children, dark }: IProps) => {

  const classes = ClassNames(
    styles.heading,
    dark ? styles.dark : null
  )

  return (
    <section className={classes}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default PageHeading
