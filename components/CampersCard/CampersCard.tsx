import Image from "next/image";
import css from "./CampersCard.module.css"
import {Camper} from "@/types/camper";
import {FaStar} from "react-icons/fa";
import {CiMap} from "react-icons/ci";
import {BsDiagram3, BsFillCarFrontFill, BsFuelPump} from "react-icons/bs";
import Button from "@/components/Button/Button";
import Link from "next/link";

interface CamperCardProps {
    camper: Camper
}

export default function CampersCard({camper}: CamperCardProps) {
    return (
        <li className={css.cardCamper}>
            <div className={css.imageWrapper}>
                <Image
                    src={camper.coverImage}
                    alt={camper.name}
                    fill
                    sizes="100 vw"
                    className={css.img}
                />
            </div>

            <div className={css.content}>
                <div className={css.header}>
                    <div className={css.titleRow}>
                        <h3 className={css.name}>{camper.name}</h3>
                        <div className={css.priceWrapper}>
                            <span className={css.price}>€{camper.price}</span>
                        </div>
                    </div>

                    <div className={css.infoRow}>
                        <div className={css.rating}>
                            <FaStar className={css.starIcon}/>
                            <span>
                {camper.rating} ({camper.totalReviews} Reviews)
              </span>
                        </div>
                        <div className={css.location}>
                            <CiMap className={css.mapIcon}/>
                            <span>{camper.location}</span>
                        </div>
                    </div>
                </div>

                <p className={css.description}>{camper.description}</p>

                <ul className={css.tags}>
                    <li className={css.tag}>
                        <BsFuelPump className={css.tagIcon}/>
                        {camper.engine}
                    </li>
                    <li className={css.tag}>
                        <BsDiagram3 className={css.tagIcon}/>
                        {camper.transmission}
                    </li>
                    <li className={css.tag}>
                        <BsFillCarFrontFill className={css.tagIcon}/>
                        {camper.form}
                    </li>
                </ul>
                <a href={`/catalog/${camper.id}`} target="_blank" rel="noopener noreferrer">
                    <Button
                        className={css.showMoreButton}
                        text={"Show more"}
                        color={"green"}
                    />
                </a>
            </div>
        </li>
    );
}