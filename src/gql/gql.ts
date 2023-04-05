/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query getNightPlans($startTime: String!, $endTime: String!, $site: Sites!) {\n        schedule(\n            newScheduleInput: {startTime: $startTime, \n                               endTime: $endTime,\n                               site: $site}\n        ) {\n            nightPlans {\n                nightIdx\n                plansPerSite {\n                    endTime\n                    site\n                    startTime\n                    visits {\n                    atomEndIdx\n                    atomStartIdx\n                    obsId\n                    startTime\n                    }\n                }\n                nightStats {\n                    completionFraction\n                    nToos\n                    planConditions\n                    planScore\n                    timeloss\n                }\n            }\n            plansSummary\n        }\n    }\n": types.GetNightPlansDocument,
    "\n    query GetPlansBySite{\n            sitePlans(site: GS) {\n                nightIdx\n                plansPerSite {\n                site\n                startTime\n                endTime\n                visits {\n                        startTime\n                        obsId\n                        atomStartIdx\n                        atomEndIdx\n                    }\n                }\n            }\n        }\n": types.GetPlansBySiteDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getNightPlans($startTime: String!, $endTime: String!, $site: Sites!) {\n        schedule(\n            newScheduleInput: {startTime: $startTime, \n                               endTime: $endTime,\n                               site: $site}\n        ) {\n            nightPlans {\n                nightIdx\n                plansPerSite {\n                    endTime\n                    site\n                    startTime\n                    visits {\n                    atomEndIdx\n                    atomStartIdx\n                    obsId\n                    startTime\n                    }\n                }\n                nightStats {\n                    completionFraction\n                    nToos\n                    planConditions\n                    planScore\n                    timeloss\n                }\n            }\n            plansSummary\n        }\n    }\n"): (typeof documents)["\n    query getNightPlans($startTime: String!, $endTime: String!, $site: Sites!) {\n        schedule(\n            newScheduleInput: {startTime: $startTime, \n                               endTime: $endTime,\n                               site: $site}\n        ) {\n            nightPlans {\n                nightIdx\n                plansPerSite {\n                    endTime\n                    site\n                    startTime\n                    visits {\n                    atomEndIdx\n                    atomStartIdx\n                    obsId\n                    startTime\n                    }\n                }\n                nightStats {\n                    completionFraction\n                    nToos\n                    planConditions\n                    planScore\n                    timeloss\n                }\n            }\n            plansSummary\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlansBySite{\n            sitePlans(site: GS) {\n                nightIdx\n                plansPerSite {\n                site\n                startTime\n                endTime\n                visits {\n                        startTime\n                        obsId\n                        atomStartIdx\n                        atomEndIdx\n                    }\n                }\n            }\n        }\n"): (typeof documents)["\n    query GetPlansBySite{\n            sitePlans(site: GS) {\n                nightIdx\n                plansPerSite {\n                site\n                startTime\n                endTime\n                visits {\n                        startTime\n                        obsId\n                        atomStartIdx\n                        atomEndIdx\n                    }\n                }\n            }\n        }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;