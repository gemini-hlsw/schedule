import React, { createContext, useState, ReactNode } from "react";

// ------------------------------------------------------------
// Populate initial data, just for testing, should be removed
import { NightPlanType } from "../../types";
// ------------------------------------------------------------

interface GlobalStateContextType {
  nightPlans: NightPlanType[];
  setNightPlans: React.Dispatch<React.SetStateAction<NightPlanType[]>>;
  plansSummary: object;
  setPlansSummary: React.Dispatch<React.SetStateAction<[]>>;
  thesis: number;
  setThesis: React.Dispatch<React.SetStateAction<number>>;
  power: number;
  setPower: React.Dispatch<React.SetStateAction<number>>;
  metPower: number;
  setMetPower: React.Dispatch<React.SetStateAction<number>>;
  visPower: number;
  setVisPower: React.Dispatch<React.SetStateAction<number>>;
  whaPower: number;
  setWhaPower: React.Dispatch<React.SetStateAction<number>>;
  loadingPlan: boolean;
  setLoadingPlan: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalStateContext = createContext<GlobalStateContextType>(null!);

export default function GlobalStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [nightPlans, setNightPlans] = useState<NightPlanType[]>([]);
  const [plansSummary, setPlansSummary] = useState<object>({});
  const [thesis, setThesis] = useState(1.0);
  const [power, setPower] = useState(2);
  const [metPower, setMetPower] = useState(1.0);
  const [visPower, setVisPower] = useState(1.0);
  const [whaPower, setWhaPower] = useState(1.0);
  const [loadingPlan, setLoadingPlan] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        nightPlans,
        setNightPlans,
        plansSummary,
        setPlansSummary,
        thesis,
        setThesis,
        power,
        setPower,
        metPower,
        setMetPower,
        visPower,
        setVisPower,
        whaPower,
        setWhaPower,
        loadingPlan,
        setLoadingPlan,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
