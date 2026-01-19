import { useLazyQuery } from "@apollo/client";
import { scheduleV2Query } from "./query";
import { useContext } from "react";
import { GlobalStateContext } from "../GlobalState/GlobalState";

export function ManualTrigger() {
  const [scheduleV2] = useLazyQuery(scheduleV2Query, {
    fetchPolicy: "no-cache",
  });

  const { setLoadingPlan } = useContext(GlobalStateContext);

  function runScheduler() {
    setLoadingPlan(true);
    scheduleV2();
  }

  return (
    <div className="manual-trigger">
      <button onClick={runScheduler}>Trigger</button>
    </div>
  );
}
