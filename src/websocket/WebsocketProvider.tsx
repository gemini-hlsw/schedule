import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
  useContext,
} from "react";
import { v4 as uuid } from "uuid";
import { GlobalStateContext } from "../components/GlobalState/GlobalState";
import { NightPlanType } from "../types";

interface WebsocketContextType {
  isReady: boolean;
  sessionId: number;
  rxMessage: any;
  txMessage: (data: any) => void;
}

export const WebsocketContext = createContext<WebsocketContextType>(
  {} as WebsocketContextType
);

export default function WebsocketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState(null);
  const ws = useRef(null);
  const sessionId = new Date().getTime();
  const { setLoadingPlan, setNightPlans, setPlansSummary } =
    useContext(GlobalStateContext);

  useEffect(() => console.log(val), [val]);

  useEffect(() => {
    function connect() {
      ws.current = new WebSocket(
        `ws://gpp-schedule-staging.herokuapp.com/ws/${sessionId}`
      );

      ws.current.onopen = () => {
        console.log("Socket successfully connected");
        setIsReady(true);
      };

      ws.current.onmessage = (event: { data: any }) => {
        let data = JSON.parse(event.data);
        console.log(data);
        if (data.type === "plans") {
          setLoadingPlan(false);
          setNightPlans(data.payload as NightPlanType[]);
          // setPlansSummary(data.payload.schedule.plansSummary);
        }
      };

      ws.current.onclose = (e: { reason: string }) => {
        console.log(
          "Socket is closed. Reconnect will be attempted in 1 second.",
          e.reason
        );
        setIsReady(false);
        setTimeout(() => connect(), 1000);
      };

      ws.current.onerror = (err: Error) => {
        console.error("Socket encountered error: Closing socket", err);
        ws.current.close();
      };
    }

    connect();

    return () => {
      ws.current.close();
    };
  }, []);

  const ret = {
    isReady,
    sessionId,
    rxMessage: val,
    txMessage: (message: object) => ws.current?.send(JSON.stringify(message)),
  };

  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  );
}
