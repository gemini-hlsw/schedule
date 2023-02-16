import ScheduleList  from './SchedulerList/ScheduleList' 
import ControlPanel from './ControlPanel'

function Tonight() {
    console.log("LPM")
    return (
        <div className="Tonight">
            <h1> Tonight Schedule</h1>
            <ControlPanel />
            <ScheduleList />
        </div>
    )
}

export default Tonight
