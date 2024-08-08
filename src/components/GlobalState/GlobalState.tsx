import React, { createContext, useState, ReactNode } from "react";
import { v4 } from "uuid";

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
  const [plansSummary, setPlansSummary] = useState<object>({});
  const [thesis, setThesis] = useState(1.1);
  const [power, setPower] = useState(2);
  const [metPower, setMetPower] = useState(1.0);
  const [visPower, setVisPower] = useState(1.0);
  const [whaPower, setWhaPower] = useState(1.0);
  const [semesterVisibility, setSemesterVisibility] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [uuid] = useState(v4());

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
