import { NightPlanType } from "../../types";
import NightPlan from "./NightPlan";
import { Carousel } from "primereact/carousel";
import "./Results.scss";
import { Panel } from "primereact/panel";

function legendTemplate(startTime: string) {
  let dateString = startTime.substring(0, startTime.indexOf("T"));
  return (
    <div className="flex align-items-center text-primary">
      <span className="pi pi-moon mr-2"></span>
      <span className="font-bold text-lg">{dateString}</span>
    </div>
  );
}

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
