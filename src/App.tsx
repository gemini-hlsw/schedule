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

  const toast = useRef(null);

  const { data: scheduleData, loading: subscriptionLoading } = useSubscription(
    subscriptionQueueSchedule,
    {
      variables: { scheduleId: uuid },
    }
  );

  useEffect(() => {
    if (!subscriptionLoading) {
      setNightPlans(scheduleData?.queueSchedule?.nightPlans?.nightTimeline);
      setPlansSummary(scheduleData?.queueSchedule?.plansSummary);
      if (scheduleData?.queueSchedule?.error) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: scheduleData?.queueSchedule?.error,
          life: 3000,
        });
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
