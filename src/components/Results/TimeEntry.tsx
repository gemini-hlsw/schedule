import React from 'react';
import { TimeEntryType, Visit } from "../../types";
import NightPlanSummary from "./NightPlanSummary";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { ProgressBar } from 'primereact/progressbar';


export default function TimeEntry({ timeEntry }: { timeEntry: TimeEntryType }) {
  function parseToVisitForPlot(visits: Visit[]) {
    return visits.map((visit: Visit) => ({
      startDate: new Date(visit.startTime),
      endDate: new Date(visit.endTime),
      yPoints: visit.altitude,
      label: visit.obsId,
      instrument: visit.instrument
    }))
  };

  const formatScore = (score: number) => {
    return score.toFixed(2)
  };

  const obsClassBodyTemplate = (visit: Visit) => {
    return <Tag value={visit.obsClass} severity={getSeverity(visit)}></Tag>;
  };

  const scoreBodyTemplate = (visit: Visit) => {
    return formatScore(visit.score)
  }

  const getSeverity = (visit: Visit )=> {
    switch (visit.obsClass) {
        case 'SCIENCE':
            return 'success';

        case 'PROGCAL':
            return 'warning';

        case 'PARTNERCAL':
            return 'danger';
        
        case 'ACQ':
            return 'info';
        
        case 'ACQCAL':
            return 'info';
        
        case 'DAYCAL':
            return 'info';

        default:
            return null;
    }
};

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
          <Column header="Observation Class" body={obsClassBodyTemplate}></Column>
          <Column field="atomStartIdx" header="Atom Start"> </Column>
          <Column field="atomEndIdx" header="Atom End"> </Column>
          <Column field="completion" header="Obs Completion"> </Column>
          <Column header="Score" body={scoreBodyTemplate}></Column>
        </DataTable>
      </AccordionTab>
    </Accordion >
  )
}