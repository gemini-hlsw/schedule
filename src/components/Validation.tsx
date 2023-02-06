
import Layout from "./Layout/Layout";
import RunPanel from "./RunPanel/RunPanel";
import SummaryTable, { Summary } from "./SummaryTable/SummaryTable";
import { Panel } from 'primereact/panel';
import './validation.scss'

export interface ValidationScreen {
    summaries: Summary[] 
}


export default function ValidationScreen({ summaries }) {

    return(
        <Layout>
            <Panel>
                <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
            </Panel>
        </Layout>
    )

} 