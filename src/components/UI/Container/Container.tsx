import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.Container}>
    {children}
  </div>
);

export default Container;
