import css from "./Home.module.css"
import Link from "next/link";


export default function Home() {
  return (
      <section className={css.hero}>
        <div className={css.wrapperTitle}>
          <h1 className={css.mainTitle}>
          Campers of your dreams
        </h1>
        <p className={css.mainDescr}>
          You can find everything you want in our catalog
        </p>
            <Link href={}>

            </Link>
        </div>
      </section>
  );
}
