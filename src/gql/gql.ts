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
    "\n    query schedule($startTime: String!,\n                  $endTime: String!,\n                  $sites: Sites!,\n                  $mode: SchedulerModes!,\n                  $numNightsToSchedule: Int!,\n                  $thesisFactor: Float,\n                  $power: Int,\n                  $metPower: Float,\n                  $visPower: Float,\n                  $whaPower: Float ) {\n      schedule(\n        newScheduleInput: {\n          startTime: $startTime, \n          numNightsToSchedule: $numNightsToSchedule , \n          sites: $sites, \n          mode: $mode, \n          endTime: $endTime,\n          thesisFactor: $thesisFactor,\n          power: $power,\n          visPower: $visPower,\n          metPower: $metPower,\n          whaPower: $whaPower}\n      ) {\n        nightPlans{\n          nightTimeline{\n            nightIndex\n            timeEntriesBySite{\n              site,\n              timeEntries{\n                startTimeSlots,\n                event,\n                plan{\n                  startTime,\n                  visits{\n                    obsId,\n                    endTime,\n                    altitude,\n                    atomEndIdx,\n                    atomStartIdx,\n                    startTime,\n                    instrument\n                  },\n                  nightStats{\n                    timeloss,\n                    planScore,\n                    timeloss,\n                    nToos,\n                    completionFraction,\n                  }\n                }\n              }\n            }\n          }\n        },\n        plansSummary\n      }\n    }\n": types.ScheduleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query schedule($startTime: String!,\n                  $endTime: String!,\n                  $sites: Sites!,\n                  $mode: SchedulerModes!,\n                  $numNightsToSchedule: Int!,\n                  $thesisFactor: Float,\n                  $power: Int,\n                  $metPower: Float,\n                  $visPower: Float,\n                  $whaPower: Float ) {\n      schedule(\n        newScheduleInput: {\n          startTime: $startTime, \n          numNightsToSchedule: $numNightsToSchedule , \n          sites: $sites, \n          mode: $mode, \n          endTime: $endTime,\n          thesisFactor: $thesisFactor,\n          power: $power,\n          visPower: $visPower,\n          metPower: $metPower,\n          whaPower: $whaPower}\n      ) {\n        nightPlans{\n          nightTimeline{\n            nightIndex\n            timeEntriesBySite{\n              site,\n              timeEntries{\n                startTimeSlots,\n                event,\n                plan{\n                  startTime,\n                  visits{\n                    obsId,\n                    endTime,\n                    altitude,\n                    atomEndIdx,\n                    atomStartIdx,\n                    startTime,\n                    instrument\n                  },\n                  nightStats{\n                    timeloss,\n                    planScore,\n                    timeloss,\n                    nToos,\n                    completionFraction,\n                  }\n                }\n              }\n            }\n          }\n        },\n        plansSummary\n      }\n    }\n"): (typeof documents)["\n    query schedule($startTime: String!,\n                  $endTime: String!,\n                  $sites: Sites!,\n                  $mode: SchedulerModes!,\n                  $numNightsToSchedule: Int!,\n                  $thesisFactor: Float,\n                  $power: Int,\n                  $metPower: Float,\n                  $visPower: Float,\n                  $whaPower: Float ) {\n      schedule(\n        newScheduleInput: {\n          startTime: $startTime, \n          numNightsToSchedule: $numNightsToSchedule , \n          sites: $sites, \n          mode: $mode, \n          endTime: $endTime,\n          thesisFactor: $thesisFactor,\n          power: $power,\n          visPower: $visPower,\n          metPower: $metPower,\n          whaPower: $whaPower}\n      ) {\n        nightPlans{\n          nightTimeline{\n            nightIndex\n            timeEntriesBySite{\n              site,\n              timeEntries{\n                startTimeSlots,\n                event,\n                plan{\n                  startTime,\n                  visits{\n                    obsId,\n                    endTime,\n                    altitude,\n                    atomEndIdx,\n                    atomStartIdx,\n                    startTime,\n                    instrument\n                  },\n                  nightStats{\n                    timeloss,\n                    planScore,\n                    timeloss,\n                    nToos,\n                    completionFraction,\n                  }\n                }\n              }\n            }\n          }\n        },\n        plansSummary\n      }\n    }\n"];

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