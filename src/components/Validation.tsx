
import Layout from "./Layout/Layout";
import RunPanel from "./ControlPanel";
import UploadButton from "./UploadButton";
import SummaryTable, { Summary } from "./SummaryTable/SummaryTable";
import { Panel } from 'primereact/panel';
import './validation.scss'
import ControlPanel from "./ControlPanel";

export default function ValidationScreen() {

    return(
        <Layout>
            <div className="flex flex-row">
                <ControlPanel />
            
                <Panel header="Sources">
                    <UploadButton label="Faults"></UploadButton>
                    <UploadButton label="GMOS Configuration"></UploadButton>
                    <UploadButton label="rToOs"></UploadButton>
                    <UploadButton label="Weather"></UploadButton>
                    <UploadButton label="Calendar"></UploadButton>
                </Panel>            
            </div>
        </Layout>
    )

}  