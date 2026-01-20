import { RtPlanType, Visit } from "../../types";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import NightPlanSummary from "../Results/NightPlanSummary";

export default function RtPlan({ rtPlan }: { rtPlan: RtPlanType }) {
  function parseToVisitForPlot(visits: Visit[]) {
    return visits.map((visit: Visit) => ({
      startDate: new Date(visit.startTime),
      endDate: new Date(visit.endTime),
      yPoints: visit.altitude,
      label: visit.obsId,
      instrument: visit.instrument,
    }));
  }
  const tz =
    rtPlan.plansPerSite[0].site === "GN"
      ? "Pacific/Honolulu"
      : "America/Santiago";
  const formatScore = (score: number) => {
    return score.toFixed(2);
  };

  function fractionToPercentage(fraction: string): number {
    const parts = fraction.split("/");
    if (parts.length !== 2) {
      throw new Error("Invalid fraction format");
    }
    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    const percentage = (numerator / denominator) * 100;

    return percentage;
  }

  const startTimeBodyTemplate = (visit: Visit) => {
    return new Date(visit.startTime).toLocaleString("en-UK", { timeZone: tz });
  };
  const obsClassBodyTemplate = (visit: Visit) => {
    return <Tag value={visit.obsClass} severity={getSeverity(visit)}></Tag>;
  };

  const scoreBodyTemplate = (visit: Visit) => {
    return formatScore(visit.score);
  };
  const peakScoreBodyTemplate = (visit: Visit) => {
    return formatScore(visit.peakScore);
  };

  const obsCompletionBodyTemplate = (visit: Visit) => {
    return `${visit.completion} (${fractionToPercentage(
      visit.completion
    ).toFixed(0)}%)`;
  };

  const getSeverity = (visit: Visit) => {
    switch (visit.obsClass) {
      case "SCIENCE":
        return "success";

      case "PROGCAL":
        return "warning";

      case "PARTNERCAL":
        return "danger";

      case "ACQ":
        return "info";

      case "ACQCAL":
        return "info";

      case "DAYCAL":
        return "info";

      default:
        return null;
    }
  };

  const programCompletion = (programCompletion: { [key: string]: number }) => {
    var pc = [];

    for (var p in programCompletion) {
      pc.push({
        progId: p,
        completion: programCompletion[p],
      });
    }
    return pc;
  };

  if (!Boolean(rtPlan) || !Boolean(rtPlan.plansPerSite.length))
    return <div>No plan found</div>;

  return (
    <div>
      <AltAzPlot
        data={parseToVisitForPlot(rtPlan.plansPerSite[0].visits)}
        eveTwilight={rtPlan.plansPerSite[0].startTime}
        mornTwilight={rtPlan.plansPerSite[0].endTime}
        site={rtPlan.plansPerSite[0].site}
      />
      <DataTable
        value={rtPlan.plansPerSite[0].visits}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="obsId" header="Observation ID">
          {" "}
        </Column>
        <Column header="Observation Class" body={obsClassBodyTemplate}></Column>
        <Column header="Start Time" body={startTimeBodyTemplate}></Column>
        <Column field="atomStartIdx" header="Atom Start">
          {" "}
        </Column>
        <Column field="atomEndIdx" header="Atom End">
          {" "}
        </Column>
        <Column
          header="Instrument"
          body={(visit: Visit) => visit.instrument}
        ></Column>
        <Column header="FPU" body={(visit: Visit) => visit.fpu}></Column>
        <Column
          header="Grating"
          body={(visit: Visit) => visit.disperser}
        ></Column>
        <Column
          header="Filters"
          body={(visit: Visit) =>
            visit.filters.length > 0 ? visit.filters.join(", ") : "None"
          }
        ></Column>
        <Column
          header="Cloud Cover"
          body={(visit: Visit) => visit.requiredConditions.cc}
        ></Column>
        <Column
          header="Image Quality"
          body={(visit: Visit) => visit.requiredConditions.iq}
        ></Column>
        <Column header="Obs Completion" body={obsCompletionBodyTemplate}>
          {" "}
        </Column>
        <Column header="peakScore" body={peakScoreBodyTemplate}></Column>
        <Column header="Score" body={scoreBodyTemplate}></Column>
      </DataTable>
      <DataTable
        value={programCompletion(
          rtPlan.plansPerSite[0].nightStats.programCompletion
        )}
      >
        <Column field="progId" header="ProgramID"></Column>
        <Column field="completion" header="Completion"></Column>
      </DataTable>
    </div>
  );
}
