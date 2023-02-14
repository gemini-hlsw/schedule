import ScheduleList  from './SchedulerList/ScheduleList' 

function Tonight() {
    console.log("LPM")
    return (
        <div className="Tonight">
            <h1> Tonight Schedule</h1>
            <ScheduleList />
        </div>
    )
}

export default Tonight
