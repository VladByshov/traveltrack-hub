"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import css from "./Sidebar.module.css";
import LocationInput from "./LocationInput/LocationInput";
import FilterGroup from "./FilterGroup/FilterGroup";
import SidebarActions from "./SidebarActions/SidebarActions";
import { ENGINE_OPTIONS, FORM_OPTIONS, TRANSMISSION_OPTIONS } from "./constants";

interface SidebarFormProps {
  initialLocation: string;
  initialForm: string;
  initialEngine: string;
  initialTransmission: string;
}

function SidebarForm({
  initialLocation,
  initialForm,
  initialEngine,
  initialTransmission,
}: SidebarFormProps) {
  const router = useRouter();

  const [location, setLocation] = useState(initialLocation);
  const [form, setForm] = useState(initialForm);
  const [engine, setEngine] = useState(initialEngine);
  const [transmission, setTransmission] = useState(initialTransmission);

  const hasActiveFilters = useMemo(() => {
    return Boolean(location || form || engine || transmission);
  }, [location, form, engine, transmission]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    const normalizedLocation = location.trim();

    if (normalizedLocation) params.set("location", normalizedLocation);
    if (form) params.set("form", form);
    if (engine) params.set("engine", engine);
    if (transmission) params.set("transmission", transmission);

    router.replace(`/catalog?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    router.replace("/catalog", { scroll: false });
  };

  return (
    <aside className={css.sidebar}>
      <LocationInput value={location} onChange={setLocation} />

      <div className={css.filtersCard}>
        <h3 className={css.filtersTitle}>Filters</h3>

        <div className={css.groups}>
          <FilterGroup
            title="Camper form"
            name="form"
            options={FORM_OPTIONS}
            value={form}
            onChange={setForm}
          />

          <FilterGroup
            title="Engine"
            name="engine"
            options={ENGINE_OPTIONS}
            value={engine}
            onChange={setEngine}
          />

          <FilterGroup
            title="Transmission"
            name="transmission"
            options={TRANSMISSION_OPTIONS}
            value={transmission}
            onChange={setTransmission}
          />
        </div>

        <SidebarActions
          onSearch={handleSearch}
          onReset={handleReset}
          hasActiveFilters={hasActiveFilters}
        />
      </div>
    </aside>
  );
}

export default function Sidebar() {
  const searchParams = useSearchParams();

  const paramsSnapshot = {
    location: searchParams.get("location") || "",
    form: searchParams.get("form") || "",
    engine: searchParams.get("engine") || "",
    transmission: searchParams.get("transmission") || "",
  };

  return (
    <SidebarForm
      key={searchParams.toString()}
      initialLocation={paramsSnapshot.location}
      initialForm={paramsSnapshot.form}
      initialEngine={paramsSnapshot.engine}
      initialTransmission={paramsSnapshot.transmission}
    />
  );
}
