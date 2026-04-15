import css from "./Home.module.css"
import Link from "next/link";
import Button from "@/components/Button/Button";


export default function Home() {
  return (
      <section className={css.hero}>
        <div className={css.wrapperTitleDescr}>
          <h1 className={css.mainTitle}>
          Campers of your dreams
        </h1>
        <p className={css.mainDescr}>
          You can find everything you want in our catalog
        </p>
            <Button text={"View Now"}/>
        </div>
      </section>
  );
}
