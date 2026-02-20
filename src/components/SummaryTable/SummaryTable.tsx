import { cn } from "@/lib/utils";
import { type RunSummary } from "../../types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Summary({ summary }: { summary: { [key: string]: number[] } }) {
  const programs = Object.keys(summary);
  let final_metric = 0;
  const summaries = [];
  for (const p of programs) {
    summaries.push({
      program: p,
      completed: summary[p][0],
      metric: summary[p][1].toFixed(2),
    });
    final_metric += summary[p][1];
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="dark:bg-white/20 bg-black/20">
          <TableHead className="h-6 font-bold">Program</TableHead>
          <TableHead className="h-6 font-bold">Completed</TableHead>
          <TableHead className="h-6 font-bold">Metric</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {summaries.map((summary) => (
          <TableRow key={summary.program}>
            <TableCell className="p-0 px-2">{summary.program}</TableCell>
            <TableCell className="p-0 px-2">{summary.completed}</TableCell>
            <TableCell className="p-0 px-2">{summary.metric}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>Final Metric: {final_metric.toFixed(2)}</TableCaption>
    </Table>
  );
}

function Metrics({ metrics }: { metrics: { [key: string]: number } }) {
  const bands = Object.keys(metrics);
  const tableMetrics = [];
  for (const b of bands) {
    tableMetrics.push({
      metric: b,
      value: metrics[b].toFixed(3),
    });
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="dark:bg-white/20 bg-black/20">
          <TableHead className="h-6 font-bold">Band</TableHead>
          <TableHead className="h-6 font-bold">Metric</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableMetrics.map((metric) => (
          <TableRow key={metric.metric}>
            <TableCell className="p-0 px-2">{metric.metric}</TableCell>
            <TableCell className="p-0 px-2">{metric.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function SummaryTable({
  plansSummary,
}: {
  plansSummary: RunSummary;
}) {
  if (
    !plansSummary ||
    !plansSummary.summary ||
    Object.keys(plansSummary.summary).length === 0
  ) {
    return null;
  }

  return (
    <div
      className={cn(
        "border rounded-md flex flex-col gap-2 p-3 flex-wrap",
        "dark:bg-white/20 bg-black/10"
      )}
    >
      <h1 className="font-bold">Summary</h1>
      <Summary summary={plansSummary.summary} />
      <Metrics metrics={plansSummary.metricsPerBand} />
    </div>
  );
}
