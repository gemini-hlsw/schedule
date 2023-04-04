import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'

import './SummaryTable.scss'


export default function SummaryTable({ summary }: any) {

  var programs = Object.keys(summary)
  var final_score = 0
  var summaries = []
  for(var p of programs){
    console.log(p)
    summaries.push({
      program: p,
      completed: summary[p][0],
      score: summary[p][1].toFixed(2)})
      final_score+=summary[p][1]
  }

  const footer = `Final Score: ${final_score.toFixed(2)}`
  return(
    <Panel header="Summary">
      <DataTable value={summaries} stripedRows footer={footer} responsiveLayout="scroll">
        <Column field='program' header='Program' ></Column>
        <Column field='completed' header='% Completed'></Column>
        <Column field='score' header='Score'></Column> 
      </DataTable>
    </Panel>
  )
}
