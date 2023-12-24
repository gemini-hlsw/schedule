import React from 'react'
import { NightPlanType } from '../../types'
import { TabPanel, TabView } from 'primereact/tabview'
import NightPlan from './NightPlan'
import "./Results.scss"

function legendTemplate(startTime: string) {
  let dateString = startTime.substring(0, startTime.indexOf('T'))
  return (
    <div className="flex align-items-center text-primary">
      <span className="pi pi-moon mr-2"></span>
      <span className="font-bold text-lg">{dateString}</span>
    </div>
  )
}

export default function Results({ plans }: { plans: NightPlanType[] }) {
  let nightPlans: React.ReactElement[] = []
  plans.map((night: NightPlanType, idx: number) => {
    nightPlans.push(
      <TabPanel key={`nightTab${idx}`} header={legendTemplate(night.timeEntriesBySite[0].timeEntries[0].plan.startTime)}>
        <NightPlan nightPlan={night} />
      </TabPanel>
    )
  })

  return (
    <div className="results">
      <TabView>
        {nightPlans}
      </TabView>
    </div>
  )
}