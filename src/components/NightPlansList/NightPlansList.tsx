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
  
  const legendTemplate = (startTime: string) => {
    let dateString = startTime.substring(0, startTime.indexOf('T'));
    return (
      <div className="flex align-items-center text-primary">
        <span className="pi pi-moon mr-2"></span>
        <span className="font-bold text-lg">{dateString}</span>
      </div>
    )
  }

  const parseToVisitForPlot = (visits: any) => {
    const parseData = visits.map((visit: any) => {  
      const startDate = new Date(visit.startTime) // startDate
      const endDate = new Date(visit.endTime)
      return {
        startDate,
        endDate,
        yPoints: visit.altitude,
        label: visit.obsId,
        instrument: visit.instrument
      }
    })

    return (
      <AltAzPlot data={parseData}/>
    )
  }


  return (
    <Panel className="night-plans" header="Night Plans">
      {plans.map((nightPlan: any, i: number) => {
        return nightPlan.plansPerSite.map((plan: any, j: number) => {
            return (
              <Fieldset className="single-plan" 
                        key={`night_plan_field_${i}`} 
                        legend={legendTemplate(plan.startTime)} 
                        toggleable>
                <React.Fragment key={`per_site_${j}`}>
                  <NightPlanSummary {...plan.nightStats} site={plan.site}/>
                  <Accordion className="view-plan">
                    <AccordionTab header="View Plan">
                      {parseToVisitForPlot(plan.visits)}
                    </AccordionTab>
                  </Accordion>
                </React.Fragment>
              </Fieldset>
            )
        })
      })}
    </Panel>
  )
}