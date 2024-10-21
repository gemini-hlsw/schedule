import { NightPlanType } from "../../types";
import NightPlan from "./NightPlan";
import { Carousel } from "primereact/carousel";
import "./Results.scss";
import { Panel } from "primereact/panel";

export default function Results({ plans }: { plans: NightPlanType[] }) {
  function nightPlanTemplate(night: NightPlanType) {
    return <NightPlan nightPlan={night} />;
  }

  return (
    <Panel className="results" header="Results">
      <Carousel
        value={plans}
        numVisible={1}
        numScroll={1}
        // showIndicators={false}
        circular
        itemTemplate={nightPlanTemplate}
      />
    </Panel>
  );
}
