import React from 'react';
import moment from 'moment-timezone';
import { TimeEntryType, Visit } from "../../types";
import NightPlanSummary from "./NightPlanSummary";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { ProgressBar } from 'primereact/progressbar';


export default function TimeEntry({timeEntry, mornTwilight, eveTwilight}: {timeEntry: TimeEntryType, 
                                                                           mornTwilight: string, 
                                                                           eveTwilight: string}) {
  function parseToVisitForPlot(visits: Visit[]) {
    console.log(visits[0].startTime)
    console.log( moment.utc(visits[0].startTime).tz('Pacific/Honolulu').toDate())
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

  function fractionToPercentage(fraction: string): number {
    const parts = fraction.split('/');
    if (parts.length !== 2) {
      throw new Error('Invalid fraction format');
    }
    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);
    if (denominator === 0) {
      throw new Error('Denominator cannot be zero');
    }
    const percentage = (numerator / denominator) * 100;
  
    return percentage;
  }
  

  const obsClassBodyTemplate = (visit: Visit) => {
    return <Tag value={visit.obsClass} severity={getSeverity(visit)}></Tag>;
  };

  const scoreBodyTemplate = (visit: Visit) => {
    return formatScore(visit.score)
  }
  const peakScoreBodyTemplate = (visit: Visit) => {
    return formatScore(visit.peakScore)
  }

  const obsCompletionBodyTemplate = (visit: Visit) => {
    return `${visit.completion} (${fractionToPercentage(visit.completion).toFixed(0)}%)`
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
        <AltAzPlot data={parseToVisitForPlot(timeEntry.plan.visits)} eveTwilight={eveTwilight} mornTwilight={mornTwilight} />
        <DataTable value={timeEntry.plan.visits} tableStyle={{ minWidth: '50rem' }}>
          <Column field="obsId" header="Observation ID"> </Column>
          <Column header="Observation Class" body={obsClassBodyTemplate}></Column>
          <Column field="atomStartIdx" header="Atom Start"> </Column>
          <Column field="atomEndIdx" header="Atom End"> </Column>
          <Column header="Obs Completion" body={obsCompletionBodyTemplate}> </Column>
          <Column header="peakScore" body={peakScoreBodyTemplate}></Column>
          <Column header="Score" body={scoreBodyTemplate}></Column>
        </DataTable>
      </AccordionTab>
    </Accordion >
  )
}