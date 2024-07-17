import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useSubscription } from "@apollo/client";
import { subscriptionQueueSchedule } from "./components/GlobalState/scheduleSubscription";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "./components/GlobalState/GlobalState";

function App() {
  const { setNightPlans, setPlansSummary, setLoadingPlan } =
    useContext(GlobalStateContext);
  const { data: scheduleData, loading: subscriptionLoading } = useSubscription(
    subscriptionQueueSchedule,
    {
      variables: { scheduleId: "test" },
    }
  );

  useEffect(() => {
    if (!subscriptionLoading) {
      setNightPlans(scheduleData?.queueSchedule?.nightPlans?.nightTimeline);
      setPlansSummary(scheduleData?.queueSchedule?.plansSummary);
      setLoadingPlan(false);
    }
  }, [scheduleData, subscriptionLoading]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
