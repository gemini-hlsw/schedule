import { TimeEntryType } from "../types";

export function sortNightPlan(timeline: any) {
  let newTimelines = [];
  for (let n_idx in timeline) {
    let sTimelineEntries = [];
    for (let site in timeline[n_idx]) {
      let sEntries: TimeEntryType[] = [];
      let eveTwi = timeline[n_idx][site][0].event.time;
      let mornTwi =
        timeline[n_idx][site][timeline[n_idx][site].length - 1].event.time;
      for (let entry in timeline[n_idx][site]) {
        if (Object.keys(timeline[n_idx][site][entry].plan).length > 0) {
          let planTime = timeline[n_idx][site][entry].plan.start.split(" ");
          sEntries.push({
            startTimeSlots: parseInt(
              timeline[n_idx][site][entry].startTimeSlot
            ),
            event: timeline[n_idx][site][entry].event.description,
            plan: {
              startTime: `${planTime[0]}T${planTime[1]}:00`,
              visits: timeline[n_idx][site][entry].plan.visits.map((v: any) => {
                let vStartTime = v.starTime.split(" ");
                let vEndTime = v.endTime.split(" ");
                return {
                  ...v,
                  endTime: `${vEndTime[0]}T${vEndTime[1]}:00`,
                  startTime: `${vStartTime[0]}T${vStartTime[1]}:00`,
                  obsClass: v.obs_class,
                };
              }),
              nightStats: {
                timeLoss: timeline[n_idx][site][entry].plan.nightStats.timeLoss,
                planScore: parseFloat(
                  timeline[n_idx][site][entry].plan.nightStats.planScore
                ),
                nToos: 0,
                completionFraction:
                  timeline[n_idx][site][entry].plan.nightStats
                    .completionFraction,
                programCompletion:
                  timeline[n_idx][site][entry].plan.nightStats
                    .programCompletion,
              },
            },
          });
        }
      }
      sTimelineEntries.push({
        site: site as string,
        eveTwilight: eveTwi as string,
        mornTwilight: mornTwi as string,
        timeEntries: sEntries,
      });
    }
    newTimelines.push({
      nightIndex: parseInt(n_idx),
      timeEntriesBySite: sTimelineEntries,
    });
  }
  return newTimelines;
}
