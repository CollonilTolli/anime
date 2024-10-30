import SeasonCard from "@/features/SeasonCard/SeasonCard";
import BlockTitle from "@/shared/BlockTitle/BlockTitle";
import css from "./Season.module.scss";
import cn from "classnames";

export default function Season() {
  const animeArray = [
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
    {
      photo: "/images/jujutsu1.png",
      title: "Магическая битва",
    },
  ];
  return (
    <div className={cn("container", css.Season)}>
      <BlockTitle title={"Сезонные аниме"} />
      <div className={css.LineCards}>
        {animeArray.map((element, index) => (
          <SeasonCard key={index} photo={element.photo} title={element.title} />
        ))}
      </div>
    </div>
  );
}
