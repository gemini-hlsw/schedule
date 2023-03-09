import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'

import './SummaryTable.scss'

export type Summary = {
  program: string,
  completed: string,
  score: string
}

interface SummaryProps {
  summaries: Summary[]
}

const footer = `Final Score: 2.3405`


export default function SummaryTable({ summaries }: SummaryProps) {
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
