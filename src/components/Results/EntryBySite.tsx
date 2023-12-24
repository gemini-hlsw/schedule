import { useState } from "react"
import { TimeEntriesBySite, TimeEntryType } from "../../types"
import TimeEntry from "./TimeEntry"

export default function EntryBySite({ entryBySite }: { entryBySite: TimeEntriesBySite }) {
  const [selectedEntry, setSelectedEntry] = useState<TimeEntryType>(entryBySite.timeEntries[0] ?? {} as TimeEntryType)
  let timeLine: React.ReactElement[] = []
  entryBySite.timeEntries.map((en: TimeEntryType, idx: number) => {
    timeLine.push(
      <div
        className={`${(JSON.stringify(en) === JSON.stringify(selectedEntry)) ? "active" : ""} event-bullet`}
        key={`timeEntry${idx}`}
        onClick={() => setSelectedEntry(en)}
      >
        <div className="bullet" />
        <span className="text">{en.event}</span>
      </div>
    )
  })

  return (
    <div className="site-entry">
      <h4 className="title">Timeline</h4>
      <div className="timeline">
        {timeLine}
      </div>
      <TimeEntry timeEntry={selectedEntry} />
    </div>
  )
}