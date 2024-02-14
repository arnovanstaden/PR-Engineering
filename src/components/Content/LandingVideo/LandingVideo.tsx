'use client';

import styles from './LandingVideo.module.scss';
import fallbackImage from '@static/videos/fallback.jpg';
import Image from 'next/image';

const LandingVideo: React.FC = () => (
  <div className={styles.LandingVideo}>
    <Image
      fill
      priority
      src={fallbackImage}
      alt="Fallback Image"
      className={styles.fallbackImage}
    />
    <video
      autoPlay
      muted={true}
      loop={true}
      controls={false}
      playsInline
    >
      <source src="/static/videos/landing.mp4" type="video/mp4" />
    </video>
  </div>
);

export default LandingVideo;
