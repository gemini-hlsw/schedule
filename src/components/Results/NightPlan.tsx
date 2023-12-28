import { NightPlanType, TimeEntriesBySite } from "../../types";
import { TabView, TabPanel } from "primereact/tabview";
import EntryBySite from "./EntryBySite";

export default function NightPlan({ nightPlan }: { nightPlan: NightPlanType }) {
  let entriesBySite: React.ReactElement[] = [];
  nightPlan.timeEntriesBySite.map((en: TimeEntriesBySite, idx: number) => {
    entriesBySite.push(
      <TabPanel key={`siteEntry${idx}`} header={en.site}>
        <EntryBySite entryBySite={en} key={`entrySite${idx}`} />
      </TabPanel>
    );
  });

  return <TabView>{entriesBySite}</TabView>;
}
