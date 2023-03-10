import React from 'react'
import { Fieldset } from 'primereact/fieldset'
import { Panel } from 'primereact/panel'
import { Accordion, AccordionTab } from 'primereact/accordion'
import NightPlanSummary from './NightPlanSummary'
import "./NightPlansList.scss"


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

  //TODO: This should be inside the query
  const summary = {
    timeloss: 200,
    conditions: "0.5``- 0.7`` 0.3mag WV",
    nToOs: 1,
    planScore: 555,
    completition: {
      band1: 70,
      band2: 20,
      band3: 0,
      band4: 0
    }
  }

  return (
    <Panel className="night-plans" header="Night Plans">
      {plans.map((nightPlan: any, i: number) => {
        return (
          <Fieldset className="single-plan" key={`night_plan_field_${i}`} legend={legendTemplate(nightPlan.nightIdx)} toggleable>
            {nightPlan.plansPerSite.map((plan: any, j: number) => {
              return (
                <React.Fragment key={`per_site_${j}`}>
                  <NightPlanSummary {...summary} />
                  <Accordion className="view-plan">
                    <AccordionTab header="View Plan">
                      <p>{plan.site}</p>
                      <p>{plan.startTime}</p>
                      <p>{plan.endTime}</p>
                      <p>Visits</p>
                      {plan.visits.map((visit: any, k: number) => {
                        return (
                          <p key={k}>{visit.obsId}</p>
                        )
                      })}
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