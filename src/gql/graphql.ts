/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date with time (isoformat) */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** ID of an Observation */
  SObservationID: any;
  /** Origin of the Source */
  SOrigin: any;
  /** Depiction of the sites that can be load to the collector */
  Sites: any;
  Upload: any;
};

export type ChangeOriginSuccess = {
  __typename?: 'ChangeOriginSuccess';
  fromOrigin: Scalars['String'];
  toOrigin: Scalars['String'];
};

export type CreateNewScheduleInput = {
  endTime: Scalars['String'];
  metPower?: InputMaybe<Scalars['Float']>;
  mode: SchedulerModes;
  numNightsToSchedule?: InputMaybe<Scalars['Int']>;
  power?: InputMaybe<Scalars['Int']>;
  semesterVisibility?: Scalars['Boolean'];
  sites: Scalars['Sites'];
  startTime: Scalars['String'];
  thesisFactor?: InputMaybe<Scalars['Float']>;
  visPower?: InputMaybe<Scalars['Float']>;
  whaPower?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeOrigin: ChangeOriginSuccess;
  loadSourcesFiles: SourceFileHandlerResponse;
};


export type MutationChangeOriginArgs = {
  mode: SchedulerModes;
  newOrigin: Scalars['SOrigin'];
};


export type MutationLoadSourcesFilesArgs = {
  filesInput: UseFilesSourceInput;
};

export type NewNightPlans = {
  __typename?: 'NewNightPlans';
  nightPlans: SNightTimelines;
  plansSummary: Scalars['JSON'];
};

export type Query = {
  __typename?: 'Query';
  allPlans: Array<SPlans>;
  plans: Array<SPlans>;
  schedule: NewNightPlans;
  sitePlans: Array<SPlans>;
};


export type QueryScheduleArgs = {
  newScheduleInput: CreateNewScheduleInput;
};


export type QuerySitePlansArgs = {
  site: Site;
};

export type SNightInTimeline = {
  __typename?: 'SNightInTimeline';
  nightIndex: Scalars['Int'];
  timeEntriesBySite: Array<TimelineEntriesBySite>;
};

export type SNightStats = {
  __typename?: 'SNightStats';
  completionFraction: Scalars['JSON'];
  nToos: Scalars['Int'];
  planScore: Scalars['Float'];
  timeloss: Scalars['String'];
};

export type SNightTimelines = {
  __typename?: 'SNightTimelines';
  nightTimeline: Array<SNightInTimeline>;
};

export type SPlan = {
  __typename?: 'SPlan';
  endTime: Scalars['DateTime'];
  nightStats: SNightStats;
  site: Site;
  startTime: Scalars['DateTime'];
  visits: Array<SVisit>;
};

export type SPlans = {
  __typename?: 'SPlans';
  nightIdx: Scalars['Int'];
  plansPerSite: Array<SPlan>;
};

export type STimelineEntry = {
  __typename?: 'STimelineEntry';
  event: Scalars['String'];
  plan: SPlan;
  startTimeSlots: Scalars['Int'];
};

export type SVisit = {
  __typename?: 'SVisit';
  altitude: Array<Scalars['Float']>;
  atomEndIdx: Scalars['Int'];
  atomStartIdx: Scalars['Int'];
  completion: Scalars['String'];
  endTime: Scalars['DateTime'];
  instrument: Scalars['String'];
  obsClass: Scalars['String'];
  obsId: Scalars['SObservationID'];
  peakScore: Scalars['Float'];
  score: Scalars['Float'];
  startTime: Scalars['DateTime'];
};

export type SchedulerModes =
  | 'OPERATION'
  | 'SIMULATION'
  | 'VALIDATION';

export type Site =
  | 'GN'
  | 'GS';

export type SourceFileHandlerResponse = {
  __typename?: 'SourceFileHandlerResponse';
  loaded: Scalars['Boolean'];
  msg: Scalars['String'];
  service: Scalars['String'];
};

export type TimelineEntriesBySite = {
  __typename?: 'TimelineEntriesBySite';
  eveTwilight: Scalars['DateTime'];
  mornTwilight: Scalars['DateTime'];
  site: Site;
  timeEntries: Array<STimelineEntry>;
};

export type UseFilesSourceInput = {
  calendar?: InputMaybe<Scalars['Upload']>;
  engTasks?: InputMaybe<Scalars['Upload']>;
  faults?: InputMaybe<Scalars['Upload']>;
  gmosFpus?: InputMaybe<Scalars['Upload']>;
  gmosGratings?: InputMaybe<Scalars['Upload']>;
  service: Scalars['String'];
  sites: Scalars['Sites'];
};

export type ScheduleQueryVariables = Exact<{
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  sites: Scalars['Sites'];
  mode: SchedulerModes;
  numNightsToSchedule: Scalars['Int'];
  thesisFactor?: InputMaybe<Scalars['Float']>;
  power?: InputMaybe<Scalars['Int']>;
  metPower?: InputMaybe<Scalars['Float']>;
  visPower?: InputMaybe<Scalars['Float']>;
  whaPower?: InputMaybe<Scalars['Float']>;
}>;


export type ScheduleQuery = { __typename?: 'Query', schedule: { __typename?: 'NewNightPlans', plansSummary: any, nightPlans: { __typename?: 'SNightTimelines', nightTimeline: Array<{ __typename?: 'SNightInTimeline', nightIndex: number, timeEntriesBySite: Array<{ __typename?: 'TimelineEntriesBySite', site: Site, mornTwilight: any, eveTwilight: any, timeEntries: Array<{ __typename?: 'STimelineEntry', startTimeSlots: number, event: string, plan: { __typename?: 'SPlan', startTime: any, visits: Array<{ __typename?: 'SVisit', obsId: any, endTime: any, altitude: Array<number>, atomEndIdx: number, atomStartIdx: number, startTime: any, instrument: string, score: number, obsClass: string, completion: string, peakScore: number }>, nightStats: { __typename?: 'SNightStats', timeloss: string, planScore: number, nToos: number, completionFraction: any } } }> }> }> } } };


export const ScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"schedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sites"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Sites"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SchedulerModes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numNightsToSchedule"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thesisFactor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"power"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"visPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whaPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newScheduleInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"numNightsToSchedule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numNightsToSchedule"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sites"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"endTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"semesterVisibility"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"thesisFactor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thesisFactor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"power"},"value":{"kind":"Variable","name":{"kind":"Name","value":"power"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"visPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"visPower"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"metPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metPower"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"whaPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whaPower"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightTimeline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightIndex"}},{"kind":"Field","name":{"kind":"Name","value":"timeEntriesBySite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"mornTwilight"}},{"kind":"Field","name":{"kind":"Name","value":"eveTwilight"}},{"kind":"Field","name":{"kind":"Name","value":"timeEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTimeSlots"}},{"kind":"Field","name":{"kind":"Name","value":"event"}},{"kind":"Field","name":{"kind":"Name","value":"plan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"visits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obsId"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"altitude"}},{"kind":"Field","name":{"kind":"Name","value":"atomEndIdx"}},{"kind":"Field","name":{"kind":"Name","value":"atomStartIdx"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"instrument"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"obsClass"}},{"kind":"Field","name":{"kind":"Name","value":"completion"}},{"kind":"Field","name":{"kind":"Name","value":"peakScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nightStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeloss"}},{"kind":"Field","name":{"kind":"Name","value":"planScore"}},{"kind":"Field","name":{"kind":"Name","value":"timeloss"}},{"kind":"Field","name":{"kind":"Name","value":"nToos"}},{"kind":"Field","name":{"kind":"Name","value":"completionFraction"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"plansSummary"}}]}}]}}]} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>;