"use client"

import { createContext } from "react";

const StudySectionsContext = createContext(null);

export function StudySectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StudySectionsContext.Provider value={null}>
      {children}
    </StudySectionsContext.Provider>
  );
}
