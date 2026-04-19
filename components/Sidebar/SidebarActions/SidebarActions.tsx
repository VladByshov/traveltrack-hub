import Button from "@/components/Button/Button";
import css from "./SidebarActions.module.css";

interface SidebarActionsProps {
  onSearch: () => void;
  onReset: () => void;
  hasActiveFilters: boolean;
}

export default function SidebarActions({ onSearch, onReset, hasActiveFilters }: SidebarActionsProps) {
  return (
    <div className={css.actions}>
      <Button text="Search" color="green" className={css.actionButton} onClick={onSearch} />
      <Button
        text="✕ Clear Filters"
        color="white"
        className={css.actionButton}
        onClick={onReset}
        disabled={!hasActiveFilters}
      />
    </div>
  );
}
