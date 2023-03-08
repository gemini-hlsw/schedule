
type CompletitionRates = {
  band1: number,
  band2: number,
  band3: number,
  band4: number
}


interface NightPlanSummaryProps {
  timeloss: number,
  conditions: string, // TODO: Might be good to have a special type or class
  nToOs: number, //TODO: Same as conditions. An optional list of ToOs might want to be display
  planScore: number,
  completition: CompletitionRates


}


export default function NightPlanSummary({timeloss, conditions, nToOs, planScore, completition }: NightPlanSummaryProps){
  return(
    <div className="summary">
      <i className="pi pi-clock">{timeloss} hours</i>
      <i className="pi pi-cloud">{conditions}</i>
      <i className="pi pi-eye">{nToOs}</i>
      <i className="pi pi-chart-line">{planScore}</i>
      <i className="pi pi-percentage">Band 1: {completition.band1}</i>
      <i className="pi pi-percentage">Band 2: {completition.band2}</i>
      <i className="pi pi-percentage">Band 3: {completition.band3}</i>
      <i className="pi pi-percentage">Band 4: {completition.band4}</i>
    </div>
  )
}