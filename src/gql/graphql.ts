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
};

export type CreateNewScheduleInput = {
  endTime: Scalars['String'];
  startTime: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newSchedule: NewScheduleResponse;
};


export type MutationNewScheduleArgs = {
  newScheduleInput: CreateNewScheduleInput;
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
  sitePlans: Array<SPlans>;
};


export type QuerySitePlansArgs = {
  site: Site;
};

export type SPlan = {
  __typename?: 'SPlan';
  endTime: Scalars['DateTime'];
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

export type GetPlansBySiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansBySiteQuery = { __typename?: 'Query', sitePlans: Array<{ __typename?: 'SPlans', nightIdx: number, plansPerSite: Array<{ __typename?: 'SPlan', site: Site, startTime: any, endTime: any, visits: Array<{ __typename?: 'SVisit', startTime: any, obsId: string, atomStartIdx: number, atomEndIdx: number }> }> }> };


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
};

export type CreateNewScheduleInput = {
  endTime: Scalars['String'];
  startTime: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newSchedule: NewScheduleResponse;
};


export type MutationNewScheduleArgs = {
  newScheduleInput: CreateNewScheduleInput;
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
  sitePlans: Array<SPlans>;
};


export type QuerySitePlansArgs = {
  site: Site;
};

export type SPlan = {
  __typename?: 'SPlan';
  endTime: Scalars['DateTime'];
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

export type GetPlansBySiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansBySiteQuery = { __typename?: 'Query', sitePlans: Array<{ __typename?: 'SPlans', nightIdx: number, plansPerSite: Array<{ __typename?: 'SPlan', site: Site, startTime: any, endTime: any, visits: Array<{ __typename?: 'SVisit', startTime: any, obsId: string, atomStartIdx: number, atomEndIdx: number }> }> }> };
