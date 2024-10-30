import css from "./BlockTitle.module.scss";

export default function BlockTitle({ title }: { title: string }) {
  return <div className={css.Title}>{title}</div>;
}
