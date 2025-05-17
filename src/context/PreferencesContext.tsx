// src/context/PreferencesContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

interface PreferencesContextType {
  selectedSymbols: string[];
  toggleSymbol: (symbol: string) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);

  const toggleSymbol = (symbol: string) => {
    setSelectedSymbols(prev =>
      prev.includes(symbol) ? prev.filter(s => s !== symbol) : [...prev, symbol]
    );
  };

  return (
    <PreferencesContext.Provider value={{ selectedSymbols, toggleSymbol }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used within a PreferencesProvider");
  return context;
}
