import Icon from '@components/UI/Icon/Icon';
import styles from './Team.module.scss';
import { teamData } from './data';
import Image from 'next/image';

const Team: React.FC = () => {
  return (
    <div className={styles.Team}>
      {teamData.map((member, index) => (
        <article key={index} className={styles.member}>
          <div className={styles.image}>
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={250}
            />
          </div>
          <div className={styles.details}>
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <div>
              <Icon name="email" />
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
          <div className={styles.bio}>
            <p>
              {member.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Team;
