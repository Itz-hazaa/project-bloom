import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Region = "india" | "intl";
type Ctx = { region: Region; setRegion: (r: Region) => void };

const RegionContext = createContext<Ctx>({ region: "india", setRegion: () => {} });

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<Region>("india");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("wp-region") as Region | null;
    if (saved === "india" || saved === "intl") setRegionState(saved);
  }, []);

  const setRegion = (r: Region) => {
    setRegionState(r);
    if (typeof window !== "undefined") localStorage.setItem("wp-region", r);
  };

  return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>;
}

export const useRegion = () => useContext(RegionContext);

export function price(india: string, intl: string, region: Region) {
  return region === "india" ? india : intl;
}
