import Image from "next/image";
import css from "./SeasonCard.module.scss";

interface SeasonCard {
  photo: string;
  title: string;
}

export default function SeasonCard({ photo, title }: SeasonCard) {
  return (
    <div className={css.ContainerCard}>
      <Image src={photo} alt={title} width={204} height={258} />
      <div className={css.Title}>{title}</div>
    </div>
  );
}
