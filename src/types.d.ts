export type Theme = "light" | "dark";

export interface NightPlanType {
  nightIndex: number;
  timeEntriesBySite: TimeEntriesBySite[];
}

export interface TimeEntriesBySite {
  site: string;
  eveTwilight: string;
  mornTwilight: string;
  timeEntries: TimeEntryType[];
}

export interface TimeEntryType {
  startTimeSlots: number;
  event: string;
  plan: Plan;
}

export interface Plan {
  startTime: string;
  visits: Visit[];
  nightStats: NightStats;
  nightConditions?: NightConditions;
}

export interface NightConditions {
  cc: string;
  iq: string;
}

export interface Visit {
  obsId: string;
  endTime: string;
  altitude: number[];
  atomEndIdx: number;
  atomStartIdx: number;
  startTime: string;
  instrument: string;
  fpu: string;
  disperser: string;
  filters: string[];
  score: number;
  completion: string;
  obsClass: string;
  peakScore: number;
  requiredConditions: NightConditions;
}

export interface NightStats {
  timeloss: string;
  planScore: number;
  nToos: number;
  completionFraction: string;
  programCompletion: string;
}
