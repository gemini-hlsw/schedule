import { TimeEntryType, Visit } from "../../types";
import NightPlanSummary from "./NightPlanSummary";
import AltAzPlot from "../SchedulerPlot/SchedulerPlot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ObsClassBadge } from "./ObsClassBadge";

export default function TimeEntry({
  timeEntry,
  mornTwilight,
  eveTwilight,
  site,
}: {
  timeEntry: TimeEntryType;
  mornTwilight: string;
  eveTwilight: string;
  site: string;
}) {
  function parseToVisitForPlot(visits: Visit[]) {
    return visits.map((visit: Visit) => ({
      startDate: new Date(visit.startTime),
      endDate: new Date(visit.endTime),
      yPoints: visit.altitude,
      label: visit.obsId,
      instrument: visit.instrument,
    }));
  }
  const tz = site === "GN" ? "Pacific/Honolulu" : "America/Santiago";
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

  if (!timeEntry || !timeEntry.plan) return <div>No plan found</div>;

  return (
    <Accordion
      type="single"
      collapsible
      className={cn("dark:bg-black/40 bg-white/40 p-3 border rounded-md")}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-0">
          <NightPlanSummary
            nightState={timeEntry.plan.nightStats}
            nightTitle={timeEntry.event}
            nightConditions={timeEntry.plan.nightConditions}
          />
        </AccordionTrigger>
        <AccordionContent className="py-2 flex flex-col gap-2">
          <AltAzPlot
            data={parseToVisitForPlot(timeEntry.plan.visits)}
            eveTwilight={eveTwilight}
            mornTwilight={mornTwilight}
            site={site}
          />
          <Table>
            <TableHeader>
              <TableRow className="dark:bg-white/20 bg-black/20">
                <TableHead className="h-6 font-bold">Observation Id</TableHead>
                <TableHead className="h-6 font-bold">
                  Observation Class
                </TableHead>
                <TableHead className="h-6 font-bold">Start Time</TableHead>
                <TableHead className="h-6 font-bold">Atom Start</TableHead>
                <TableHead className="h-6 font-bold">Atom End</TableHead>
                <TableHead className="h-6 font-bold">Instrument</TableHead>
                <TableHead className="h-6 font-bold">FPU</TableHead>
                <TableHead className="h-6 font-bold">Grating</TableHead>
                <TableHead className="h-6 font-bold">Filters</TableHead>
                <TableHead className="h-6 font-bold">Cloud Cover</TableHead>
                <TableHead className="h-6 font-bold">Image Quality</TableHead>
                <TableHead className="h-6 font-bold">Obs Completion</TableHead>
                <TableHead className="h-6 font-bold">Peak Score</TableHead>
                <TableHead className="h-6 font-bold">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeEntry.plan.visits.map((visit: Visit) => (
                <TableRow key={visit.obsId}>
                  <TableCell className="p-0 px-2">{visit.obsId}</TableCell>
                  <TableCell className="p-0 px-2">
                    <ObsClassBadge obsClass={visit.obsClass} />
                  </TableCell>
                  <TableCell className="p-0 px-2">
                    {new Date(visit.startTime).toLocaleString("en-UK", {
                      timeZone: tz,
                    })}
                  </TableCell>
                  <TableCell className="p-0 px-2">
                    {visit.atomStartIdx}
                  </TableCell>
                  <TableCell className="p-0 px-2">{visit.atomEndIdx}</TableCell>
                  <TableCell className="p-0 px-2">{visit.instrument}</TableCell>
                  <TableCell className="p-0 px-2">{visit.fpu}</TableCell>
                  <TableCell className="p-0 px-2">{visit.disperser}</TableCell>
                  <TableCell className="p-0 px-2">{visit.filters}</TableCell>
                  <TableCell className="p-0 px-2">
                    {visit.requiredConditions.cc}
                  </TableCell>
                  <TableCell className="p-0 px-2">
                    {visit.requiredConditions.iq}
                  </TableCell>
                  <TableCell className="p-0 px-2">
                    {obsCompletionBodyTemplate(visit)}
                  </TableCell>
                  <TableCell className="p-0 px-2">
                    {peakScoreBodyTemplate(visit)}
                  </TableCell>
                  <TableCell className="p-0 px-2">
                    {scoreBodyTemplate(visit)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableHeader>
              <TableRow className="dark:bg-white/20 bg-black/20">
                <TableHead className="h-6 font-bold">Program Id</TableHead>
                <TableHead className="h-6 font-bold">Completition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(timeEntry.plan.nightStats.programCompletion).length >
              0 ? (
                Object.keys(timeEntry.plan.nightStats.programCompletion).map(
                  (progId: string) => (
                    <TableRow key={progId}>
                      <TableCell className="p-0 px-2">{progId}</TableCell>
                      <TableCell className="p-0 px-2">
                        {timeEntry.plan.nightStats.programCompletion[progId]}
                      </TableCell>
                    </TableRow>
                  )
                )
              ) : (
                <TableRow>
                  <TableCell className="p-0 px-2">
                    No available options
                  </TableCell>
                  <TableCell className="p-0 px-2"></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
