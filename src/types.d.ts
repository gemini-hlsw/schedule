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
  timeLosses: { fault: number; weather: number; unschedule: number };
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
  timeLoss: { fault: number; unschedule: number; weather: number };
  planScore: number;
  nToos: number;
  completionFraction: number[];
  programCompletion: { [key: string]: number };
}

export interface RunSummary {
  summary: object;
  metricsPerBand: object;
}
