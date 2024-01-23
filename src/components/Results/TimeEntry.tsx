import { TimeEntryType, Visit } from "../../types";
import NightPlanSummary from "./NightPlanSummary";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


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
        <DataTable value={timeEntry.plan.visits} tableStyle={{ minWidth: '50rem' }}>
          <Column field="obsId" header="Observation ID"> </Column>
          <Column field="atomStartIdx" header="Atom Start"> </Column>
          <Column field="atomEndIdx" header="Atom End"> </Column>
        </DataTable>
      </AccordionTab>
    </Accordion >
  )
}