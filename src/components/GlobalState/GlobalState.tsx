import { createContext, useState, ReactNode, useEffect } from "react";

interface GlobalStateContextType {
  nightPlans: []
  setNightPlans: React.Dispatch<React.SetStateAction<[]>>
  plansSummary: []
  setPlansSummary:React.Dispatch<React.SetStateAction<[]>> 
}

export const GlobalStateContext = createContext<GlobalStateContextType>(null!);

export default function GlobalStateProvider ({ children }: { children: ReactNode }) {
  let [nightPlans, setNightPlans] = useState<[]>([])
  let [plansSummary, setPlansSummary] = useState<[]>([])

  return (
    <GlobalStateContext.Provider value={{
      nightPlans, setNightPlans, plansSummary, setPlansSummary
    }}>
      { children }
    </GlobalStateContext.Provider>
  );
}