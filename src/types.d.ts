export type Theme = 'light' | 'dark'

export interface NightPlanType {
  nightIndex: number
  timeEntriesBySite: TimeEntriesBySite[]
}

export interface TimeEntriesBySite {
  site: string
  timeEntries: TimeEntryType[]
}

export interface TimeEntryType {
  startTimeSlots: number
  event: string
  plan: Plan
}

export interface Plan {
  startTime: string
  visits: Visit[]
  nightStats: NightStats
}

export interface Visit {
  obsId: string
  endTime: string
  altitude: number[]
  atomEndIdx: number
  atomStartIdx: number
  startTime: string
  instrument: string
  score: number
  completion: string
  obsClass: string
  peakScore: number
}

export interface NightStats {
  timeloss: string
  planScore: number
  nToos: number
  completionFraction: string
}
