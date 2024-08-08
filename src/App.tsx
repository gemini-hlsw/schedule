import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useSubscription } from "@apollo/client";
import { subscriptionQueueSchedule } from "./components/GlobalState/scheduleSubscription";
import { useContext, useEffect, useRef } from "react";
import { GlobalStateContext } from "./components/GlobalState/GlobalState";
import { v4 } from "uuid";

function App() {
  const { setNightPlans, setPlansSummary, setLoadingPlan, uuid } =
    useContext(GlobalStateContext);

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
