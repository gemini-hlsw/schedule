import React, { createContext, useState, ReactNode} from "react";

// ------------------------------------------------------------
// Populate initial data, just for testing, should be removed
import { PLAN_SUMMARY, NIGHT_PLANS } from "../../test/initial-plan";
import { NightPlanType } from "../../types";
// ------------------------------------------------------------

interface GlobalStateContextType {
  nightPlans: NightPlanType[];
  setNightPlans: React.Dispatch<React.SetStateAction<NightPlanType[]>>;
  plansSummary: object;
  setPlansSummary: React.Dispatch<React.SetStateAction<[]>>;
  thesis: number,
  setThesis: React.Dispatch<React.SetStateAction<number>>;
  power: number,
  setPower: React.Dispatch<React.SetStateAction<number>>;
  metPower: number,
  setMetPower: React.Dispatch<React.SetStateAction<number>>;
  visPower: number,
  setVisPower: React.Dispatch<React.SetStateAction<number>>;
  whaPower: number,
  setWhaPower: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalStateContext = createContext<GlobalStateContextType>(null!);

export default function GlobalStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [nightPlans, setNightPlans] = useState<NightPlanType[]>([]);
  const [plansSummary, setPlansSummary] = useState<object>({});
  const [thesis, setThesis] = useState<number>(1.0);
  const [power, setPower] = useState<number>(2);
  const [metPower, setMetPower] = useState<number>(1.0);
  const [visPower, setVisPower] = useState<number>(1.0);
  const [whaPower, setWhaPower] = useState<number>(1.0);



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
        setWhaPower
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
