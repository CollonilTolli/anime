import BlockTitle from "@/shared/BlockTitle/BlockTitle";
import css from "./New.module.scss";
import AnimeCard from "@/features/AnimeCard/AnimeCard";
import cn from "classnames";

export default function New() {
  const animeArray = [
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
    {
      title: "Магическая битва 0",
      type: "фильм",
      year: 2024,
      tags: ["Сёнен", "Фэнтези", "Экшен"],
      image: "/images/jujutsu1.png",
    },
  ];
  return (
    <div className={cn(css.Container, "container")}>
      <BlockTitle title="Новые аниме" />
      <div className={css.CatalogAnime}>
        {animeArray.map((el, index) => (
          <AnimeCard
            key={index}
            title={el.title}
            type={el.type}
            year={el.year}
            tags={el.tags}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
}
