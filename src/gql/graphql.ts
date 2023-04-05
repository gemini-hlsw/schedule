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
  /** Depiction of the sites that can be load to the collector */
  Sites: any;
};

export type CreateNewScheduleInput = {
  endTime: Scalars['String'];
  site: Scalars['Sites'];
  startTime: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newSchedule: NewScheduleResponse;
};


export type MutationNewScheduleArgs = {
  newScheduleInput: CreateNewScheduleInput;
};

export type NewNightPlans = {
  __typename?: 'NewNightPlans';
  nightPlans: Array<SPlans>;
  plansSummary: Scalars['JSON'];
};

export type NewScheduleError = {
  __typename?: 'NewScheduleError';
  error: Scalars['String'];
};

export type NewScheduleResponse = NewScheduleError | NewScheduleSuccess;

export type NewScheduleSuccess = {
  __typename?: 'NewScheduleSuccess';
  success: Scalars['Boolean'];
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

export type SNightStats = {
  __typename?: 'SNightStats';
  completionFraction: Scalars['JSON'];
  nToos: Scalars['Int'];
  planConditions: Scalars['JSON'];
  planScore: Scalars['Float'];
  timeloss: Scalars['String'];
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

export type SVisit = {
  __typename?: 'SVisit';
  atomEndIdx: Scalars['Int'];
  atomStartIdx: Scalars['Int'];
  obsId: Scalars['String'];
  startTime: Scalars['DateTime'];
};

export enum Site {
  Gn = 'GN',
  Gs = 'GS'
}

export type GetNightPlansQueryVariables = Exact<{
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  site: Scalars['Sites'];
}>;


export type GetNightPlansQuery = { __typename?: 'Query', schedule: { __typename?: 'NewNightPlans', plansSummary: any, nightPlans: Array<{ __typename?: 'SPlans', nightIdx: number, plansPerSite: Array<{ __typename?: 'SPlan', endTime: any, site: Site, startTime: any, visits: Array<{ __typename?: 'SVisit', atomEndIdx: number, atomStartIdx: number, obsId: string, startTime: any }>, nightStats: { __typename?: 'SNightStats', completionFraction: any, nToos: number, planConditions: any, planScore: number, timeloss: string } }> }> } };

export type GetPlansBySiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansBySiteQuery = { __typename?: 'Query', sitePlans: Array<{ __typename?: 'SPlans', nightIdx: number, plansPerSite: Array<{ __typename?: 'SPlan', site: Site, startTime: any, endTime: any, visits: Array<{ __typename?: 'SVisit', startTime: any, obsId: string, atomStartIdx: number, atomEndIdx: number }> }> }> };


export const GetNightPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNightPlans"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Sites"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newScheduleInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"endTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightIdx"}},{"kind":"Field","name":{"kind":"Name","value":"plansPerSite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"visits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atomEndIdx"}},{"kind":"Field","name":{"kind":"Name","value":"atomStartIdx"}},{"kind":"Field","name":{"kind":"Name","value":"obsId"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nightStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completionFraction"}},{"kind":"Field","name":{"kind":"Name","value":"nToos"}},{"kind":"Field","name":{"kind":"Name","value":"planConditions"}},{"kind":"Field","name":{"kind":"Name","value":"planScore"}},{"kind":"Field","name":{"kind":"Name","value":"timeloss"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"plansSummary"}}]}}]}}]} as unknown as DocumentNode<GetNightPlansQuery, GetNightPlansQueryVariables>;
export const GetPlansBySiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlansBySite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sitePlans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"EnumValue","value":"GS"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nightIdx"}},{"kind":"Field","name":{"kind":"Name","value":"plansPerSite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"visits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"obsId"}},{"kind":"Field","name":{"kind":"Name","value":"atomStartIdx"}},{"kind":"Field","name":{"kind":"Name","value":"atomEndIdx"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPlansBySiteQuery, GetPlansBySiteQueryVariables>;
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
  /** Depiction of the sites that can be load to the collector */
  Sites: any;
};

export type CreateNewScheduleInput = {
  endTime: Scalars['String'];
  site: Scalars['Sites'];
  startTime: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newSchedule: NewScheduleResponse;
};


export type MutationNewScheduleArgs = {
  newScheduleInput: CreateNewScheduleInput;
};

export type NewNightPlans = {
  __typename?: 'NewNightPlans';
  nightPlans: Array<SPlans>;
  plansSummary: Scalars['JSON'];
};

export type NewScheduleError = {
  __typename?: 'NewScheduleError';
  error: Scalars['String'];
};

export type NewScheduleResponse = NewScheduleError | NewScheduleSuccess;

export type NewScheduleSuccess = {
  __typename?: 'NewScheduleSuccess';
  success: Scalars['Boolean'];
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

export type SNightStats = {
  __typename?: 'SNightStats';
  completionFraction: Scalars['JSON'];
  nToos: Scalars['Int'];
  planConditions: Scalars['JSON'];
  planScore: Scalars['Float'];
  timeloss: Scalars['String'];
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

export type SVisit = {
  __typename?: 'SVisit';
  atomEndIdx: Scalars['Int'];
  atomStartIdx: Scalars['Int'];
  obsId: Scalars['String'];
  startTime: Scalars['DateTime'];
};

export enum Site {
  Gn = 'GN',
  Gs = 'GS'
}

export type GetNightPlansQueryVariables = Exact<{
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  site: Scalars['Sites'];
}>;


export type GetNightPlansQuery = { __typename?: 'Query', schedule: { __typename?: 'NewNightPlans', plansSummary: any, nightPlans: Array<{ __typename?: 'SPlans', nightIdx: number, plansPerSite: Array<{ __typename?: 'SPlan', endTime: any, site: Site, startTime: any, visits: Array<{ __typename?: 'SVisit', atomEndIdx: number, atomStartIdx: number, obsId: string, startTime: any }>, nightStats: { __typename?: 'SNightStats', completionFraction: any, nToos: number, planConditions: any, planScore: number, timeloss: string } }> }> } };

export type GetPlansBySiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansBySiteQuery = { __typename?: 'Query', sitePlans: Array<{ __typename?: 'SPlans', nightIdx: number, plansPerSite: Array<{ __typename?: 'SPlan', site: Site, startTime: any, endTime: any, visits: Array<{ __typename?: 'SVisit', startTime: any, obsId: string, atomStartIdx: number, atomEndIdx: number }> }> }> };
