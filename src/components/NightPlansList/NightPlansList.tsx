import React from 'react'
import { Fieldset } from 'primereact/fieldset'
import { Panel } from 'primereact/panel'
import { Accordion, AccordionTab } from 'primereact/accordion'
import NightPlanSummary from './NightPlanSummary'
import SchedulerPlot from '../SchedulerPlot/SchedulerPlot'
import "./NightPlansList.scss"
import AltAzPlot from '../SchedulerPlot/SchedulerPlot'


// TODO: This should be given by codegen but no specific type response exists in the backend
interface SitePlan {
  nightIdx: number,
  plansPerSite: {
    site: string,
    startTime: string,
    endTime: string,
    visits: {
      obsId: string
      startTime: string
      atomStartIdx: number
      atomEndIdx: number

    }[]
  }[]
}

export default function NightPlansList({ plans }: { plans: SitePlan[] }) {
  
  const legendTemplate = (nightIdx: number) => {
    return (
      <div className="flex align-items-center text-primary">
        <span className="pi pi-user mr-2"></span>
        <span className="font-bold text-lg">NightPlan {nightIdx}</span>
      </div>
    )
  }

  const parseToVisitForPlot = (visits: any) => {
    const parseData = visits.map((visit: any) => {  
      const startDate = new Date(visit.startTime) // startDate
      const endDate = new Date(visit.startTime)
      endDate.setMinutes(endDate.getMinutes() + 15) //missing length, fix this
      return {
        startDate,
        endDate,
        yPoints: visit.altitude,
        label: visit.obsId
      }
    })

    return (
      <AltAzPlot data={parseData}/>
    )
  }


  return (
    <Panel className="night-plans" header="Night Plans">
      {plans.map((nightPlan: any, i: number) => {
        return (
          <Fieldset className="single-plan" key={`night_plan_field_${i}`} legend={legendTemplate(nightPlan.nightIdx)} toggleable>
            {nightPlan.plansPerSite.map((plan: any, j: number) => {
              return (
                <React.Fragment key={`per_site_${j}`}>
                  <NightPlanSummary {...plan.nightStats} site={plan.site}/>
                  <Accordion className="view-plan">
                    <AccordionTab header="View Plan">
                      {parseToVisitForPlot(plan.visits)}
                    </AccordionTab>
                  </Accordion>
                </React.Fragment>
              )
            })}
          </Fieldset>
        )
      })}
    </Panel>
  )
}