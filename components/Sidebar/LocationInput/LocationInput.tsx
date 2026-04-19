import { CiMap } from "react-icons/ci";
import css from "./LocationInput.module.css";

interface LocationInputProps {
  value: string;
  onChange: (nextValue: string) => void;
}

export default function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <div className={css.container}>
      <label htmlFor="sidebar-location" className={css.label}>
        Location
      </label>
      <div className={css.inputWrap}>
        <CiMap className={css.icon} aria-hidden="true" />
        <input
          id="sidebar-location"
          type="text"
          className={css.input}
          placeholder="Kyiv, Ukraine"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}
