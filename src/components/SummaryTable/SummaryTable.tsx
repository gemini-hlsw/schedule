import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Panel } from "primereact/panel";

import "./SummaryTable.scss";
import { RunSummary } from "../../types";

function Summary({ summary }: { summary: any }) {
  var programs = Object.keys(summary);
  var final_metric = 0;
  var summaries = [];
  for (var p of programs) {
    summaries.push({
      program: p,
      completed: summary[p][0],
      metric: summary[p][1].toFixed(2),
    });
    final_metric += summary[p][1];
  }

  const footer = `Final Metric: ${final_metric.toFixed(2)}`;
  return (
    <DataTable value={summaries} stripedRows footer={footer}>
      <Column field="program" header="Program"></Column>
      <Column field="completed" header="% Completed"></Column>
      <Column field="metric" header="Metric"></Column>
    </DataTable>
  );
}

function Metrics({ metrics }: { metrics: any }) {
  var bands = Object.keys(metrics);
  var tableMetrics = [];
  for (var b of bands) {
    tableMetrics.push({
      metric: b,
      value: metrics[b].toFixed(3),
    });
  }
  return (
    <DataTable value={tableMetrics} stripedRows>
      <Column field="metric" header="Band"></Column>
      <Column field="value" header="Metric"></Column>
    </DataTable>
  );
}

export default function SummaryTable({
  plansSummary,
}: {
  plansSummary: RunSummary;
}) {
  return (
    <Panel header="Summary">
      <Summary summary={plansSummary.summary} />
      <Metrics metrics={plansSummary.metricsPerBand} />
    </Panel>
  );
}
