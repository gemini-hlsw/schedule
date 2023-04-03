
interface NightPlanSummaryProps {
  timeloss: string,
  planConditions: string, // TODO: Might be good to have a special type or class
  nToOs: number, //TODO: Same as conditions. An optional list of ToOs might want to be display
  planScore: number,
  completionFraction: string


}


export default function NightPlanSummary({timeloss, planConditions, nToOs, planScore, completionFraction }: NightPlanSummaryProps){
  const conditions = JSON.parse(planConditions)
  const completion = JSON.parse(completionFraction) 
  return(
    <div className="summary">
      <i className="pi pi-clock">{timeloss}</i>
      <i className="pi pi-cloud">cc: {conditions.cc} </i>
      <i className="pi pi-eye">{nToOs}</i>
      <i className="pi pi-chart-line">{planScore}</i>
      <i className="pi pi-percentage">Band 1: {completion[1]}</i>
      <i className="pi pi-percentage">Band 2: {completion[2]}</i>
      <i className="pi pi-percentage">Band 3: {completion[3]}</i>
      <i className="pi pi-percentage">Band 4: {completion[4]}</i>
    </div>
  )
}