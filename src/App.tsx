import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useSubscription } from "@apollo/client";
import { subscriptionQueueSchedule } from "./components/GlobalState/scheduleSubscription";
import { subscriptionRTSchedule } from "./components/GlobalState/rtSubscription";
import { useContext, useEffect, useRef } from "react";
import { GlobalStateContext } from "./components/GlobalState/GlobalState";
import { Toast } from "primereact/toast";

function App() {
  const { setNightPlans, setPlansSummary, setLoadingPlan, setRtPlan, uuid } =
    useContext(GlobalStateContext);

  const toast = useRef<Toast>(null);

  const {
    data: scheduleData,
    loading: subscriptionLoading,
    error,
  } = useSubscription(subscriptionQueueSchedule, {
    variables: { scheduleId: uuid },
  });

  const {
    data: rtData,
    loading: rtLoading,
    error: rtError,
  } = useSubscription(subscriptionQueueSchedule, {
    variables: { scheduleId: "operation" },
  });

  useEffect(() => {
    if (!subscriptionLoading) {
      if (
        scheduleData &&
        scheduleData.queueSchedule.__typename === "NewNightPlans"
      ) {
        setNightPlans(scheduleData.queueSchedule.nightPlans.nightTimeline);
        setPlansSummary(scheduleData.queueSchedule.plansSummary);
      } else if (
        scheduleData &&
        scheduleData.queueSchedule.__typename === "NightPlansError"
      ) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: scheduleData.queueSchedule.error,
          sticky: true,
        });
        setNightPlans([]);
        setPlansSummary({} as any);
      } else if (
        scheduleData &&
        scheduleData.queueSchedule.__typename === "NewPlansRT"
      ) {
        setRtPlan(scheduleData.queueSchedule.nightPlans);
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: error.message,
          sticky: true,
        });
        setNightPlans([]);
        setPlansSummary({} as any);
      }
      setLoadingPlan(false);
    }
  }, [scheduleData, subscriptionLoading]);

  useEffect(() => {
    if (!rtLoading) {
      if (rtData && rtData.queueSchedule.__typename === "NewNightPlans") {
        setNightPlans(rtData.queueSchedule.nightPlans.nightTimeline);
        setPlansSummary(rtData.queueSchedule.plansSummary);
      } else if (
        rtData &&
        rtData.queueSchedule.__typename === "NightPlansError"
      ) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: rtData.queueSchedule.error,
          sticky: true,
        });
        setNightPlans([]);
        setPlansSummary({} as any);
      } else if (rtData && rtData.queueSchedule.__typename === "NewPlansRT") {
        setRtPlan(rtData.queueSchedule.nightPlans);
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: error.message,
          sticky: true,
        });
        setNightPlans([]);
        setPlansSummary({} as any);
      }
      setLoadingPlan(false);
    }
  }, [rtData, rtLoading]);

  return (
    <Layout>
      <Outlet />
      <Toast ref={toast} />
    </Layout>
  );
}

export default App;
