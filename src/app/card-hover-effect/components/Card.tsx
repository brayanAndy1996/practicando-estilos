import styles from '../styles/style.module.scss';
import Image from 'next/image';
import { InterfaceCardHoverEffect } from '@/lib/types/cardHoverEffect';

const Card = ({ title, description, image }: InterfaceCardHoverEffect) => {
  return (
    <div className={styles.card}>
      <div className={styles.face1 + " " + styles.face}>
        <div className={styles.content}>
          <Image
            src={image}
            alt="card"
            width={300}
            height={300}
          />
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.face2 + " " + styles.face}>
        <div className={styles.content}>
          <p>
            {description}
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
