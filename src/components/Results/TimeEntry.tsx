import { TimeEntryType, Visit } from "../../types";
import NightPlanSummary from "./NightPlanSummary";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function TimeEntry({ timeEntry }: { timeEntry: TimeEntryType }) {
  function parseToVisitForPlot(visits: Visit[]) {
    return visits.map((visit: Visit) => ({
      startDate: new Date(visit.startTime),
      endDate: new Date(visit.endTime),
      yPoints: visit.altitude,
      label: visit.obsId,
      instrument: visit.instrument
    }))
  }

  return (
    <Accordion className="time-entry">
      <AccordionTab header={
        <NightPlanSummary
          nightState={timeEntry.plan.nightStats}
          nightTitle={timeEntry.plan.startTime.substring(0, timeEntry.plan.startTime.indexOf('T'))} />}
      >
        <AltAzPlot data={parseToVisitForPlot(timeEntry.plan.visits)} />
      </AccordionTab>
    </Accordion >
  )
}