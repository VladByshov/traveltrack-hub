
import CatalogClient from "@/components/CatalogClient/CatalogClient";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Choose your campervan and start your adventure",
};


export default function Catalog() {
  return <CatalogClient />;
}

