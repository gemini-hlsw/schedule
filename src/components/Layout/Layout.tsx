import { ReactNode, useEffect, useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import "./Layout.scss";
import { wsLink } from "../../apollo-client";

export default function Layout({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(false);
  wsLink.client.on("closed", () => setIsOnline(false));
  wsLink.client.on("error", () => setIsOnline(false));
  wsLink.client.on("connected", () => setIsOnline(true));

  return (
    <div className="layout">
      <Header title="schedule" isOnline={isOnline} />
      <Navbar />
      <main className="main">{children}</main>
    </div>
  );
}
