import { NightConditions, NightStats } from "../../types";

export default function NightPlanSummary({
  nightState,
  nightConditions,
  nightTitle,
}: {
  nightState: NightStats;
  nightConditions: NightConditions;
  nightTitle: string;
}) {
  // const conditions = JSON.parse(planConditions)
  const completion = JSON.parse(nightState.completionFraction);
  return (
    <div className="summary">
      <h4 className="title">Night Plan {nightTitle}</h4>
      <div className="body">
        <div>Timeloss: {nightState.timeLoss}</div>
        <div>Cloud Cover: {nightConditions.cc}</div>
        <div>Image Quality: {nightConditions.iq}</div>
        {/* <Tag icon="pi pi-cloud">
          CC: {conditions.cc} WV: {conditions.wv}
        </Tag> */}
        <div>ToOs: {nightState.nToos}</div>
        <div>Score: {nightState.planScore.toFixed(2)}</div>
        {completion[1] > 0 && <div>Band 1: {completion[1]}</div>}
        {completion[2] > 0 && <div>Band 2: {completion[2]}</div>}
        {completion[3] > 0 && <div>Band 3: {completion[3]}</div>}
        {completion[4] > 0 && <div>Band 4: {completion[4]}</div>}
      </div>
    </div>
  );
}
