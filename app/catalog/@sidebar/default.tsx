"use client"

import css from "./Sidebar.module.css";
import Button from "@/components/Button/Button";

export default function SidebarCatalogs(){
    return (
        <aside className={css.filters}>
            {/* Location */}
            <div className={css.block}>
                <label className={css.label}>Location</label>
                <div className={css.input}>
                    Kyiv, Ukraine
                </div>
            </div>

            {/* Filters */}
            <div className={css.block}>
                <h3 className={css.title}>Filters</h3>

                {/* Camper form */}
                <div className={css.group}>
                    <p className={css.groupTitle}>Camper form</p>
                    {["Alcove", "Panel Van", "Integrated", "Semi Integrated"].map(item => (
                        <label key={item} className={css.option}>
                            <input type="radio" name="form" />
                            {item}
                        </label>
                    ))}
                </div>

                {/* Engine */}
                <div className={css.group}>
                    <p className={css.groupTitle}>Engine</p>
                    {["Diesel", "Petrol", "Hybrid", "Electric"].map(item => (
                        <label key={item} className={css.option}>
                            <input type="radio" name="engine" />
                            {item}
                        </label>
                    ))}
                </div>

                {/* Transmission */}
                <div className={css.group}>
                    <p className={css.groupTitle}>Transmission</p>
                    {["Automatic", "Manual"].map(item => (
                        <label key={item} className={css.option}>
                            <input type="radio" name="transmission" />
                            {item}
                        </label>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <Button text={"Search"} color={"green"} className={css.buttonFilter} onClick={()=>{}}/>
            <Button text={"✕ Clear filters"} color={"white"} className={css.buttonFilter} onClick={()=>{}}/>
        </aside>
    );
}