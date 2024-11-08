import css from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={ss.loadingContainer}>
      <div className={css.spinner}></div>
    </div>
  );
}