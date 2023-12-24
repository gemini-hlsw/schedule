import { NightPlanType, TimeEntriesBySite } from "../../types"
import EntryBySite from "./EntryBySite"

export default function NightPlan({ nightPlan }: { nightPlan: NightPlanType }) {
  let entriesBySite: React.ReactElement[] = []
  nightPlan.timeEntriesBySite.map((en: TimeEntriesBySite, idx: number) => {
    entriesBySite.push(<EntryBySite entryBySite={en} key={`entrySite${idx}`} />)
  })

  return (<>{entriesBySite}</>)
}