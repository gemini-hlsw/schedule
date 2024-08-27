import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useSubscription } from "@apollo/client";
import { subscriptionQueueSchedule } from "./components/GlobalState/scheduleSubscription";
import { useContext, useEffect, useRef } from "react";
import { GlobalStateContext } from "./components/GlobalState/GlobalState";
import { Toast } from "primereact/toast";

function App() {
  const { setNightPlans, setPlansSummary, setLoadingPlan, uuid } =
    useContext(GlobalStateContext);

  const toast = useRef<Toast>(null);

  const { data: scheduleData, loading: subscriptionLoading } = useSubscription(
    subscriptionQueueSchedule,
    {
      variables: { scheduleId: uuid },
    }
  );

  useEffect(() => {
    if (!subscriptionLoading) {
      if (scheduleData.queueSchedule.__typename === "NewNightPlans") {
        setNightPlans(scheduleData.queueSchedule.nightPlans.nightTimeline);
        setPlansSummary(scheduleData.queueSchedule.plansSummary);
      } else if (scheduleData.queueSchedule.__typename === "NightPlansError") {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: scheduleData.queueSchedule.error,
          sticky: true,
        });
        setNightPlans([]);
        setPlansSummary({} as any);
      }
      setLoadingPlan(false);
    }
  }, [scheduleData, subscriptionLoading]);

  return (
    <Layout>
      <Outlet />
      <Toast ref={toast} />
    </Layout>
  );
}

export default App;
