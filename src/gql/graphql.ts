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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf). */
  JSON: any;
  /** ID of an Observation */
  SObservationID: any;
  /** Depiction of the sites that can be load to the collector */
  Sites: any;
};

export type CreateNewScheduleInput = {
  airPower?: InputMaybe<Scalars['Float']>;
  endTime: Scalars['String'];
  metPower?: InputMaybe<Scalars['Float']>;
  mode: SchedulerModes;
  numNightsToSchedule?: InputMaybe<Scalars['Int']>;
  power?: InputMaybe<Scalars['Int']>;
  programs?: InputMaybe<Array<Scalars['String']>>;
  semesterVisibility?: Scalars['Boolean'];
  sites: Scalars['Sites'];
  startTime: Scalars['String'];
  thesisFactor?: InputMaybe<Scalars['Float']>;
  visPower?: InputMaybe<Scalars['Float']>;
  whaPower?: InputMaybe<Scalars['Float']>;
};

export type NewNightPlans = {
  __typename?: 'NewNightPlans';
  nightPlans: SNightTimelines;
  plansSummary: SRunSummary;
};

export type NightPlansError = {
  __typename?: 'NightPlansError';
  error: Scalars['String'];
};

export type NightPlansResponse = NewNightPlans | NightPlansError;

export type Query = {
  __typename?: 'Query';
  schedule: Scalars['String'];
  version: Version;
};


export type QueryScheduleArgs = {
  newScheduleInput: CreateNewScheduleInput;
  scheduleId: Scalars['String'];
};

export type SConditions = {
  __typename?: 'SConditions';
  cc: Scalars['String'];
  iq: Scalars['String'];
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
  programCompletion: Scalars['JSON'];
  timeLoss: Scalars['JSON'];
};

export type SNightTimelines = {
  __typename?: 'SNightTimelines';
  nightTimeline: Array<SNightInTimeline>;
};

export type SPlan = {
  __typename?: 'SPlan';
  endTime: Scalars['DateTime'];
  nightConditions: SConditions;
  nightStats: SNightStats;
  site: Site;
  startTime: Scalars['DateTime'];
  visits: Array<SVisit>;
};

export type SRunSummary = {
  __typename?: 'SRunSummary';
  metricsPerBand: Scalars['JSON'];
  summary: Scalars['JSON'];
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
  disperser: Scalars['String'];
  endTime: Scalars['DateTime'];
  filters: Array<Scalars['String']>;
  fpu: Scalars['String'];
  instrument: Scalars['String'];
  obsClass: Scalars['String'];
  obsId: Scalars['SObservationID'];
  peakScore: Scalars['Float'];
  requiredConditions: SConditions;
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

export type Subscription = {
  __typename?: 'Subscription';
  queueSchedule: NightPlansResponse;
};


export type SubscriptionQueueScheduleArgs = {
  scheduleId: Scalars['String'];
};

export type TimelineEntriesBySite = {
  __typename?: 'TimelineEntriesBySite';
  eveTwilight: Scalars['DateTime'];
  mornTwilight: Scalars['DateTime'];
  site: Site;
  timeEntries: Array<STimelineEntry>;
  timeLosses: Scalars['JSON'];
};

export type Version = {
  __typename?: 'Version';
  changelog: Array<Scalars['String']>;
  version: Scalars['String'];
};

export type ScheduleQueryVariables = Exact<{
  scheduleId: Scalars['String'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  sites: Scalars['Sites'];
  mode: SchedulerModes;
  numNightsToSchedule: Scalars['Int'];
  semesterVisibility: Scalars['Boolean'];
  thesisFactor?: InputMaybe<Scalars['Float']>;
  power?: InputMaybe<Scalars['Int']>;
  metPower?: InputMaybe<Scalars['Float']>;
  whaPower?: InputMaybe<Scalars['Float']>;
  airPower?: InputMaybe<Scalars['Float']>;
  visPower?: InputMaybe<Scalars['Float']>;
  programs: Array<Scalars['String']> | Scalars['String'];
}>;


export type ScheduleQuery = { __typename?: 'Query', schedule: string };

export type QueueScheduleSubscriptionVariables = Exact<{
  scheduleId: Scalars['String'];
}>;


export type QueueScheduleSubscription = { __typename?: 'Subscription', queueSchedule: { __typename: 'NewNightPlans', nightPlans: { __typename?: 'SNightTimelines', nightTimeline: Array<{ __typename?: 'SNightInTimeline', nightIndex: number, timeEntriesBySite: Array<{ __typename?: 'TimelineEntriesBySite', site: Site, mornTwilight: any, eveTwilight: any, timeLosses: any, timeEntries: Array<{ __typename?: 'STimelineEntry', startTimeSlots: number, event: string, plan: { __typename?: 'SPlan', startTime: any, nightConditions: { __typename?: 'SConditions', iq: string, cc: string }, visits: Array<{ __typename?: 'SVisit', obsId: any, endTime: any, altitude: Array<number>, atomEndIdx: number, atomStartIdx: number, startTime: any, instrument: string, fpu: string, disperser: string, filters: Array<string>, score: number, obsClass: string, completion: string, peakScore: number, requiredConditions: { __typename?: 'SConditions', iq: string, cc: string } }>, nightStats: { __typename?: 'SNightStats', timeLoss: any, planScore: number, nToos: number, completionFraction: any, programCompletion: any } } }> }> }> }, plansSummary: { __typename?: 'SRunSummary', summary: any, metricsPerBand: any } } | { __typename: 'NightPlansError', error: string } };

export type VersionQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionQuery = { __typename?: 'Query', version: { __typename?: 'Version', version: string, changelog: Array<string> } };


export const ScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"schedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sites"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Sites"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SchedulerModes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numNightsToSchedule"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"semesterVisibility"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thesisFactor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"power"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whaPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"airPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"visPower"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"programs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"newScheduleInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sites"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"endTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"thesisFactor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thesisFactor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"power"},"value":{"kind":"Variable","name":{"kind":"Name","value":"power"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"metPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metPower"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"whaPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whaPower"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"airPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"airPower"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"visPower"},"value":{"kind":"Variable","name":{"kind":"Name","value":"visPower"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"semesterVisibility"},"value":{"kind":"Variable","name":{"kind":"Name","value":"semesterVisibility"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"numNightsToSchedule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numNightsToSchedule"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"programs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"programs"}}}]}}]}]}}]} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>;
export const QueueScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"queueSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queueSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewNightPlans"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightTimeline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightIndex"}},{"kind":"Field","name":{"kind":"Name","value":"timeEntriesBySite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"mornTwilight"}},{"kind":"Field","name":{"kind":"Name","value":"eveTwilight"}},{"kind":"Field","name":{"kind":"Name","value":"timeLosses"}},{"kind":"Field","name":{"kind":"Name","value":"timeEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTimeSlots"}},{"kind":"Field","name":{"kind":"Name","value":"event"}},{"kind":"Field","name":{"kind":"Name","value":"plan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"nightConditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iq"}},{"kind":"Field","name":{"kind":"Name","value":"cc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"visits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obsId"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"altitude"}},{"kind":"Field","name":{"kind":"Name","value":"atomEndIdx"}},{"kind":"Field","name":{"kind":"Name","value":"atomStartIdx"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"instrument"}},{"kind":"Field","name":{"kind":"Name","value":"fpu"}},{"kind":"Field","name":{"kind":"Name","value":"disperser"}},{"kind":"Field","name":{"kind":"Name","value":"filters"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"obsClass"}},{"kind":"Field","name":{"kind":"Name","value":"completion"}},{"kind":"Field","name":{"kind":"Name","value":"peakScore"}},{"kind":"Field","name":{"kind":"Name","value":"requiredConditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iq"}},{"kind":"Field","name":{"kind":"Name","value":"cc"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nightStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeLoss"}},{"kind":"Field","name":{"kind":"Name","value":"planScore"}},{"kind":"Field","name":{"kind":"Name","value":"nToos"}},{"kind":"Field","name":{"kind":"Name","value":"completionFraction"}},{"kind":"Field","name":{"kind":"Name","value":"programCompletion"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"plansSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"metricsPerBand"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NightPlansError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<QueueScheduleSubscription, QueueScheduleSubscriptionVariables>;
export const VersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"version"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"changelog"}}]}}]}}]} as unknown as DocumentNode<VersionQuery, VersionQueryVariables>;