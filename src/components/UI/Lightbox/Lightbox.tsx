import Image from 'next/image';
import Icon from '../Icon/Icon';

// Styles
import styles from './LightBox.module.scss';
import { useEffect, useState } from 'react';
import useFreezeScrolling from 'src/hooks/useFreezeScrolling';

interface IProps {
  open: boolean;
  firstImage: string | undefined;
  images: string[]
  onClose: () => void
}

const LightBox = ({ images, firstImage, open, ...props }: IProps) => {
  const [currentImage, setCurrentImage] = useState<string>(firstImage || images[0]);
  const { freezeScrolling, unfreezeScrolling } = useFreezeScrolling()

  useEffect(() => {
    if (!firstImage) return;
    setCurrentImage(firstImage);
  }, [firstImage]);

  useEffect(() => {
    if (open) {
      freezeScrolling();
      return;
    }
    unfreezeScrolling();
  }, [open])

  const handleChangePicture = (direction: 'prev' | 'next') => {
    if (!currentImage) {
      return setCurrentImage(images[0]);
    }

    const currentIndex = images.indexOf(currentImage);

    if (direction === 'next') {
      const nextPictureUrl = images[currentIndex + 1] ? images[currentIndex + 1] : images[0];
      return setCurrentImage(nextPictureUrl);
    }

    const prevPictureUrl = images[currentIndex - 1] ? images[currentIndex - 1] : images[images.length - 1];
    return setCurrentImage(prevPictureUrl);
  };

  if (!open) return null;

  const multiImage = images.length > 1;

  return (
    <div className={styles.LightBox}>
      <Icon name="close" onClick={props.onClose} size={24} className={styles.closeButton} />
      {multiImage && (
        <Icon
          onClick={() => handleChangePicture('prev')}
          name="arrow_back"
          className={styles.arrowButton}
          size={24}
        />
      )}
      <div className={styles.image}>
        <Image
          src={currentImage}
          alt="Enlarged Project Image"
          fill
        />
      </div>
      {multiImage && (
        <Icon
          onClick={() => handleChangePicture('next')}
          name="arrow_forward"
          className={styles.arrowButton}
          size={24}
        />
      )}
    </div>
  );
}

export default LightBox
