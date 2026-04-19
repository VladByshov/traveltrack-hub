import css from "./FilterGroup.module.css";
import { SidebarOption } from "../constants";

interface FilterGroupProps<T extends string> {
  title: string;
  name: string;
  options: SidebarOption<T>[];
  value: string;
  onChange: (nextValue: string) => void;
}

export default function FilterGroup<T extends string>({
  title,
  name,
  options,
  value,
  onChange,
}: FilterGroupProps<T>) {
  return (
    <section className={css.group}>
      <h4 className={css.groupTitle}>{title}</h4>
      <div className={css.options}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          return (
            <label htmlFor={id} key={option.value} className={css.optionLabel}>
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                className={css.hiddenInput}
                checked={value === option.value}
                onChange={(event) => onChange(event.target.value)}
              />
              <span className={css.customRadio} aria-hidden="true" />
              <span className={css.labelContent}>{option.label}</span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
