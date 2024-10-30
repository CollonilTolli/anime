import Image from "next/image";
import css from "./AnimeCard.module.scss";

interface AnimeCard {
  title: string;
  type: string;
  year: number;
  tags: string[];
  image: string;
}

export default function AnimeCard({
  title,
  type,
  year,
  tags,
  image,
}: AnimeCard) {
  return (
    <div className={css.ContainerCard}>
      <Image src={image} alt={title} width={184} height={261} />
      <div className={css.AnimeInfo}>
        <div className={css.Title}>{title}</div>
        <div className={css.YearAndType}>
          {year} | {type}
        </div>
        <div className={css.Tags}>
          Жанры:
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
