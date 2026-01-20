import { scheduleVersionQuery } from "./query";
import { useQuery } from "@apollo/client";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import uiVersion from "../../../version.json";
import { cn } from "../../../lib/utils";

export function About() {
  const {
    loading,
    error,
    data: scheduleVersion,
  } = useQuery(scheduleVersionQuery, {
    fetchPolicy: "no-cache",
  });

  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        className={cn(
          "text-white bg-gray-600 hover:bg-gray-700",
          "focus:ring-4 focus:ring-gray-300 font-medium rounded-sm",
          "text-sm px-3 py-0.5 dark:bg-gray-600 dark:hover:bg-gray-700",
          "dark:focus:ring-gray-800 cursor-pointer"
        )}
        onClick={() => setVisible(true)}
      >
        <span className="label">About</span>
      </button>
      <Dialog
        className="about-modal"
        header="About"
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="body">
          <div className="column">
            <h4 className="version">
              Server version {scheduleVersion?.version?.version}
            </h4>
            {scheduleVersion?.version?.changelog.length && (
              <>
                <h4 className="changelog">Changelog</h4>
                <ul className="changelog-list">
                  {scheduleVersion?.version?.changelog.map(
                    (l: string, idx: number) => (
                      <li key={idx}>{l}</li>
                    )
                  )}
                </ul>
              </>
            )}
          </div>
          <div className="column">
            <h4 className="version">UI version {uiVersion.version}</h4>
            {uiVersion.changelog.length && (
              <>
                <h4 className="changelog">Changelog</h4>
                <ul className="changelog-list">
                  {uiVersion.changelog.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
}
