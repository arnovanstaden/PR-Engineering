'use client';

import Image from 'next/image';
import styles from './ProjectGallery.module.scss';
import { useState } from 'react';
import LightBox from '@components/UI/Lightbox/Lightbox';
import Container from '@components/UI/Container/Container';

const ProjectGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [lightBoxImage, setLightBoxImage] = useState('');

  return (
    <div className={styles.ProjectGallery}>
      <Container>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              className={styles.image}
              key={index}
              onClick={() => setLightBoxImage(image)}
            >
              <div className={styles.overlay}></div>
              <Image
                src={image}
                alt="Project Image"
                width={500}
                height={350}
              />
            </div>
          ))
          }
        </div >
      </Container >
      <LightBox
        open={!!lightBoxImage}
        images={images}
        onClose={() => setLightBoxImage('')}
        firstImage={lightBoxImage}
      />
    </div >
  );
};

export default ProjectGallery;
