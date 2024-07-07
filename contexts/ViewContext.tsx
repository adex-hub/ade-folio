"use client";
import { createContext, useContext, useState } from "react";

interface ViewContextValue {
  sectionInView: string;
  setSectionInView: React.Dispatch<React.SetStateAction<string>>;
}

const ViewContext = createContext<ViewContextValue | undefined>(undefined);

function ViewProvider({ children }: { children: React.ReactNode }) {
  const [sectionInView, setSectionInView] = useState<string>("home");

  return (
    <ViewContext.Provider value={{ sectionInView, setSectionInView }}>
      {children}
    </ViewContext.Provider>
  );
}

function useView() {
  const context = useContext(ViewContext);

  if (context === undefined)
    throw new Error("ViewContext was used outside of ViewProvider");

  return context;
}

export { ViewProvider, useView };
