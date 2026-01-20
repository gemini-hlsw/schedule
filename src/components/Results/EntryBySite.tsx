import { useEffect, useState } from "react";
import { TimeEntriesBySite, TimeEntryType } from "../../types";
import TimeEntry from "./TimeEntry";

export default function EntryBySite({
  entryBySite,
}: {
  entryBySite: TimeEntriesBySite;
}) {
  const [selectedEntry, setSelectedEntry] = useState<TimeEntryType>(
    entryBySite.timeEntries[0] ?? ({} as TimeEntryType)
  );

  useEffect(() => {
    setSelectedEntry(entryBySite.timeEntries[0] ?? ({} as TimeEntryType));
  }, [entryBySite]);

  let w = 1;
  if (entryBySite && entryBySite.timeEntries.length > 1) {
    w =
      entryBySite.timeEntries.at(-1).startTimeSlots -
      entryBySite.timeEntries.at(0).startTimeSlots;
  }

  let timeLine: React.ReactElement<any>[] = [];
  for (let en of entryBySite.timeEntries) {
    let pos =
      ((en.startTimeSlots - entryBySite.timeEntries.at(0).startTimeSlots) / w) *
      100;
    timeLine.push(
      <div
        key={en.startTimeSlots}
        onClick={() => setSelectedEntry(en)}
        className={
          JSON.stringify(en) === JSON.stringify(selectedEntry)
            ? "active bullet"
            : "bullet"
        }
        style={{ left: `${pos}%` }}
      />
    );
  }

  const timelineDate =
    entryBySite.mornTwilight.substring(
      0,
      entryBySite.mornTwilight.indexOf("T")
    ) ?? "";

  return (
    <div className="site-entry">
      <h4 className="timeline-title">Timeline {timelineDate}</h4>
      <div className="timeloss">
        <span>
          Night faults time: {entryBySite.timeLosses.fault.toFixed(2)}
        </span>
        <span>
          {" "}
          - Night weather time: {entryBySite.timeLosses.weather.toFixed(2)}
        </span>
        <span>
          {" "}
          - Unscheduled time: {entryBySite.timeLosses.unschedule.toFixed(2)}
        </span>
      </div>
      <div className="timeline">
        <div className="timeline-container">{timeLine}</div>
      </div>
      <TimeEntry
        timeEntry={selectedEntry}
        eveTwilight={entryBySite.eveTwilight}
        mornTwilight={entryBySite.mornTwilight}
        site={entryBySite.site}
      />
    </div>
  );
}
