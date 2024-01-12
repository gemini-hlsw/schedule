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
}

export const GlobalStateContext = createContext<GlobalStateContextType>(null!);

export default function GlobalStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [nightPlans, setNightPlans] = useState<NightPlanType[]>([]);
  const [plansSummary, setPlansSummary] = useState<object>({});



  return (
    <GlobalStateContext.Provider
      value={{
        nightPlans,
        setNightPlans,
        plansSummary,
        setPlansSummary,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
