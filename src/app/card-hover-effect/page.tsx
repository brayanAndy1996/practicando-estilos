import styles from "./styles/style.module.scss";
import Card from "./components/Card";
import { cards } from "@/lib/constants/cadHoverEffect";
const PageCardHoverEfect = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PageCardHoverEfect;
