import React, { createContext, useState, ReactNode } from "react";

// ------------------------------------------------------------
// Populate initial data, just for testing, should be removed
import { NightPlanType, RunSummary } from "../../types";
// ------------------------------------------------------------

interface GlobalStateContextType {
  nightPlans: NightPlanType[];
  setNightPlans: React.Dispatch<React.SetStateAction<NightPlanType[]>>;
  plansSummary: RunSummary;
  setPlansSummary: React.Dispatch<React.SetStateAction<RunSummary>>;
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
  airPower: number;
  setAirPower: React.Dispatch<React.SetStateAction<number>>;
  semesterVisibility: boolean;
  setSemesterVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  loadingPlan: boolean;
  setLoadingPlan: React.Dispatch<React.SetStateAction<boolean>>;
  uuid: string;
}

export const GlobalStateContext = createContext<GlobalStateContextType>(null!);

export default function GlobalStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [nightPlans, setNightPlans] = useState<NightPlanType[]>([]);
  const [plansSummary, setPlansSummary] = useState<RunSummary>({
    summary: {},
    metricsPerBand: {},
  });
  const [thesis, setThesis] = useState(1.1);
  const [power, setPower] = useState(2);
  const [metPower, setMetPower] = useState(1.0);
  const [visPower, setVisPower] = useState(1.0);
  const [whaPower, setWhaPower] = useState(1.0);
  const [airPower, setAirPower] = useState(0.0);
  const [semesterVisibility, setSemesterVisibility] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [uuid] = useState(
    new Date()
      .toISOString()
      .substring(0, 16)
      .replaceAll("-", "")
      .replace(":", "")
  );

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
        airPower,
        setAirPower,
        semesterVisibility,
        setSemesterVisibility,
        loadingPlan,
        setLoadingPlan,
        uuid,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
