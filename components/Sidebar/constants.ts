import { CamperEngine, CamperForm, CamperTransmission } from "@/types/camper";

export type SidebarFilterKey = "form" | "engine" | "transmission";

export interface SidebarOption<T extends string> {
  label: string;
  value: T;
}

export const FORM_OPTIONS: SidebarOption<CamperForm>[] = [
  { label: "Alcove", value: "alcove" },
  { label: "Panel Van", value: "panel_van" },
  { label: "Integrated", value: "integrated" },
  { label: "Semi Integrated", value: "semi_integrated" },
];

export const ENGINE_OPTIONS: SidebarOption<CamperEngine>[] = [
  { label: "Diesel", value: "diesel" },
  { label: "Petrol", value: "petrol" },
  { label: "Hybrid", value: "hybrid" },
  { label: "Electric", value: "electric" },
];

export const TRANSMISSION_OPTIONS: SidebarOption<CamperTransmission>[] = [
  { label: "Automatic", value: "automatic" },
  { label: "Manual", value: "manual" },
];

