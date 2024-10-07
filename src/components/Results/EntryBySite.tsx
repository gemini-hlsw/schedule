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

  let w =
    entryBySite.timeEntries.at(-1).startTimeSlots -
    entryBySite.timeEntries.at(0).startTimeSlots;
  if (w === 0) w = 1;

  let timeLine: React.ReactElement[] = [];
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

  return (
    <div className="site-entry">
      <h4 className="title">Timeline</h4>
      <div className="timeline">
        <div className="timeline-container">{timeLine}</div>
      </div>
      <h4>{selectedEntry.event}</h4>
      <TimeEntry
        timeEntry={selectedEntry}
        eveTwilight={entryBySite.eveTwilight}
        mornTwilight={entryBySite.mornTwilight}
        site={entryBySite.site}
      />
    </div>
  );
}
