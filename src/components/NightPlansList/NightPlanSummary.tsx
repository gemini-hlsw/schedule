
import { Tag } from 'primereact/tag';


interface NightPlanSummaryProps {
  timeloss: string,
  planConditions: string, // TODO: Might be good to have a special type or class
  nToOs: number, //TODO: Same as conditions. An optional list of ToOs might want to be display
  planScore: number,
  completionFraction: string,
  site: string


}


export default function NightPlanSummary({timeloss, planConditions, nToOs, planScore, completionFraction, site }: NightPlanSummaryProps){
  const conditions = JSON.parse(planConditions)
  const completion = JSON.parse(completionFraction) 
  return(
    <div className="summary">
      <Tag icon="pi pi-compass" severity="warning">
        Site: {site}
      </Tag>
      <Tag icon="pi pi-clock">
        Timeloss: {timeloss}
      </Tag>
      <Tag icon="pi pi-cloud">
        CC: {conditions.cc} WV: {conditions.wv}
      </Tag>
      <Tag icon="pi pi-eye">
        ToOs: 0{nToOs}
      </Tag>
      <Tag icon="pi pi-chart-line">
        Score: {planScore.toFixed(2)}
      </Tag>
      { (completion[1]>0) &&  
        <Tag icon="pi pi-percentage">
          Band 1: {completion[1]}
        </Tag>
      }
      { (completion[2]>0) &&  
        <Tag icon="pi pi-percentage">
          Band 2: {completion[2]}
        </Tag>
      }
       { (completion[3]>0) &&  
        <Tag icon="pi pi-percentage">
          Band 3: {completion[3]}
        </Tag>
      }
       { (completion[4]>0) &&  
        <Tag icon="pi pi-percentage">
          Band 4: {completion[4]}
        </Tag>
      }
    </div>
  )
}