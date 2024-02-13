import NextImage from '../NextImage/NextImage';

// Styles
import styles from './lightbox.module.scss';

interface IProps {
  image?: string;
  toggle: () => void
}

const Lightbox = ({ image, toggle }: IProps) => {
  if (image) {
    document.body.classList.add('noscroll');

    return (
      <div className={styles.box}>
        <i className="icon-close" onClick={toggle}></i>
        <div className={styles.overlay} onClick={toggle}>
          <div className={styles.image}>
            <NextImage
              src={image}
              alt="Enlarged Project Image"
              priority
              width={1600}
            />
          </div>
        </div>
      </div>
    )
  }

  return null

}

export default Lightbox
