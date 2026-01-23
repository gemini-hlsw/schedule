import { ReactNode, useEffect, useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { wsLink } from "../../apollo-client";
import { cn } from "../../lib/utils";

export default function Layout({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(false);
  wsLink.client.on("closed", () => setIsOnline(false));
  wsLink.client.on("error", () => setIsOnline(false));
  wsLink.client.on("connected", () => setIsOnline(true));

  return (
    <div className={cn("flex flex-col h-screen overflow-y-auto w-full")}>
      <Header title="schedule" isOnline={isOnline} />
      <div className={"flex flex-col md:flex-row grow"}>
        <Navbar />
        <main className="p-3 order-1 md:order-1 grow">{children}</main>
      </div>
    </div>
  );
}
