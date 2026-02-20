import { RtPlanType, Visit } from "../../types";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ObsClassBadge } from "../Results/ObsClassBadge";

export default function RtPlan({ rtPlan }: { rtPlan: RtPlanType }) {
  if (!rtPlan || !rtPlan.plansPerSite || rtPlan.plansPerSite.length === 0) {
    return null;
  }

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

  if (!rtPlan || !rtPlan.plansPerSite.length) return <div>No plan found</div>;

  return (
    <div
      className={cn(
        "border rounded-md flex flex-col gap-2 p-3 flex-wrap",
        "bg-transparent"
      )}
    >
      <h1 className="font-bold w-full">Plan result</h1>
      <AltAzPlot
        data={parseToVisitForPlot(rtPlan.plansPerSite[0].visits)}
        eveTwilight={rtPlan.plansPerSite[0].startTime}
        mornTwilight={rtPlan.plansPerSite[0].endTime}
        site={rtPlan.plansPerSite[0].site}
      />
      <Table>
        <TableHeader>
          <TableRow className={cn("*:h-6 *:font-bold")}>
            <TableHead>Observation Id</TableHead>
            <TableHead>Observation Class</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>Atom Start</TableHead>
            <TableHead>Atom End</TableHead>
            <TableHead>Instrument</TableHead>
            <TableHead>FPU</TableHead>
            <TableHead>Grating</TableHead>
            <TableHead>Filters</TableHead>
            <TableHead>Cloud Cover</TableHead>
            <TableHead>Image Quality</TableHead>
            <TableHead>Obs Completion</TableHead>
            <TableHead>Peak Score</TableHead>
            <TableHead>Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rtPlan.plansPerSite[0].visits.map((visit: Visit) => (
            <TableRow
              key={visit.obsId}
              className={cn(
                "odd:bg-muted/50 *:p-0 *:px-2",
                "dark:hover:bg-white/30 hover:bg-black/30"
              )}
            >
              <TableCell>{visit.obsId}</TableCell>
              <TableCell>
                <ObsClassBadge obsClass={visit.obsClass} />
              </TableCell>
              <TableCell>
                {new Date(visit.startTime).toLocaleString("en-UK", {
                  timeZone: tz,
                })}
              </TableCell>
              <TableCell>{visit.atomStartIdx}</TableCell>
              <TableCell>{visit.atomEndIdx}</TableCell>
              <TableCell>{visit.instrument}</TableCell>
              <TableCell>{visit.fpu}</TableCell>
              <TableCell>{visit.disperser}</TableCell>
              <TableCell>{visit.filters}</TableCell>
              <TableCell>{visit.requiredConditions.cc}</TableCell>
              <TableCell>{visit.requiredConditions.iq}</TableCell>
              <TableCell>{obsCompletionBodyTemplate(visit)}</TableCell>
              <TableCell>{peakScoreBodyTemplate(visit)}</TableCell>
              <TableCell>{scoreBodyTemplate(visit)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
