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
    "\n  query schedule(\n    $scheduleId: String!\n    $startTime: String!\n    $endTime: String!\n    $sites: Sites!\n    $mode: SchedulerModes!\n    $numNightsToSchedule: Int!\n    $semesterVisibility: Boolean!\n    $thesisFactor: Float\n    $power: Int\n    $metPower: Float\n    $whaPower: Float\n    $airPower: Float\n    $visPower: Float\n    $programs: [String!]!\n  ) {\n    schedule(\n      scheduleId: $scheduleId\n      newScheduleInput: {\n        startTime: $startTime\n        sites: $sites\n        mode: $mode\n        endTime: $endTime\n        thesisFactor: $thesisFactor\n        power: $power\n        metPower: $metPower\n        whaPower: $whaPower\n        airPower: $airPower\n        visPower: $visPower\n        semesterVisibility: $semesterVisibility\n        numNightsToSchedule: $numNightsToSchedule\n        programs: $programs\n      }\n    )\n  }\n": types.ScheduleDocument,
    "\n  subscription queueSchedule($scheduleId: String!) {\n    queueSchedule(scheduleId: $scheduleId) {\n      __typename\n      ... on NewNightPlans {\n        nightPlans {\n          nightTimeline {\n            nightIndex\n            timeEntriesBySite {\n              site\n              mornTwilight\n              eveTwilight\n              timeLosses\n              timeEntries {\n                startTimeSlots\n                event\n                plan {\n                  startTime\n                  nightConditions {\n                    iq\n                    cc\n                  }\n                  visits {\n                    obsId\n                    endTime\n                    altitude\n                    atomEndIdx\n                    atomStartIdx\n                    startTime\n                    instrument\n                    fpu\n                    disperser\n                    filters\n                    score\n                    obsClass\n                    completion\n                    peakScore\n                    requiredConditions {\n                      iq\n                      cc\n                    }\n                  }\n                  nightStats {\n                    timeLoss\n                    planScore\n                    nToos\n                    completionFraction\n                    programCompletion\n                  }\n                }\n              }\n            }\n          }\n        }\n        plansSummary {\n          summary\n          metricsPerBand\n        }\n      }\n      ... on NightPlansError {\n        error\n      }\n    }\n  }\n": types.QueueScheduleDocument,
    "\n  query version {\n    version {\n      version\n      changelog\n    }\n  }\n": types.VersionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query schedule(\n    $scheduleId: String!\n    $startTime: String!\n    $endTime: String!\n    $sites: Sites!\n    $mode: SchedulerModes!\n    $numNightsToSchedule: Int!\n    $semesterVisibility: Boolean!\n    $thesisFactor: Float\n    $power: Int\n    $metPower: Float\n    $whaPower: Float\n    $airPower: Float\n    $visPower: Float\n    $programs: [String!]!\n  ) {\n    schedule(\n      scheduleId: $scheduleId\n      newScheduleInput: {\n        startTime: $startTime\n        sites: $sites\n        mode: $mode\n        endTime: $endTime\n        thesisFactor: $thesisFactor\n        power: $power\n        metPower: $metPower\n        whaPower: $whaPower\n        airPower: $airPower\n        visPower: $visPower\n        semesterVisibility: $semesterVisibility\n        numNightsToSchedule: $numNightsToSchedule\n        programs: $programs\n      }\n    )\n  }\n"): (typeof documents)["\n  query schedule(\n    $scheduleId: String!\n    $startTime: String!\n    $endTime: String!\n    $sites: Sites!\n    $mode: SchedulerModes!\n    $numNightsToSchedule: Int!\n    $semesterVisibility: Boolean!\n    $thesisFactor: Float\n    $power: Int\n    $metPower: Float\n    $whaPower: Float\n    $airPower: Float\n    $visPower: Float\n    $programs: [String!]!\n  ) {\n    schedule(\n      scheduleId: $scheduleId\n      newScheduleInput: {\n        startTime: $startTime\n        sites: $sites\n        mode: $mode\n        endTime: $endTime\n        thesisFactor: $thesisFactor\n        power: $power\n        metPower: $metPower\n        whaPower: $whaPower\n        airPower: $airPower\n        visPower: $visPower\n        semesterVisibility: $semesterVisibility\n        numNightsToSchedule: $numNightsToSchedule\n        programs: $programs\n      }\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription queueSchedule($scheduleId: String!) {\n    queueSchedule(scheduleId: $scheduleId) {\n      __typename\n      ... on NewNightPlans {\n        nightPlans {\n          nightTimeline {\n            nightIndex\n            timeEntriesBySite {\n              site\n              mornTwilight\n              eveTwilight\n              timeLosses\n              timeEntries {\n                startTimeSlots\n                event\n                plan {\n                  startTime\n                  nightConditions {\n                    iq\n                    cc\n                  }\n                  visits {\n                    obsId\n                    endTime\n                    altitude\n                    atomEndIdx\n                    atomStartIdx\n                    startTime\n                    instrument\n                    fpu\n                    disperser\n                    filters\n                    score\n                    obsClass\n                    completion\n                    peakScore\n                    requiredConditions {\n                      iq\n                      cc\n                    }\n                  }\n                  nightStats {\n                    timeLoss\n                    planScore\n                    nToos\n                    completionFraction\n                    programCompletion\n                  }\n                }\n              }\n            }\n          }\n        }\n        plansSummary {\n          summary\n          metricsPerBand\n        }\n      }\n      ... on NightPlansError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription queueSchedule($scheduleId: String!) {\n    queueSchedule(scheduleId: $scheduleId) {\n      __typename\n      ... on NewNightPlans {\n        nightPlans {\n          nightTimeline {\n            nightIndex\n            timeEntriesBySite {\n              site\n              mornTwilight\n              eveTwilight\n              timeLosses\n              timeEntries {\n                startTimeSlots\n                event\n                plan {\n                  startTime\n                  nightConditions {\n                    iq\n                    cc\n                  }\n                  visits {\n                    obsId\n                    endTime\n                    altitude\n                    atomEndIdx\n                    atomStartIdx\n                    startTime\n                    instrument\n                    fpu\n                    disperser\n                    filters\n                    score\n                    obsClass\n                    completion\n                    peakScore\n                    requiredConditions {\n                      iq\n                      cc\n                    }\n                  }\n                  nightStats {\n                    timeLoss\n                    planScore\n                    nToos\n                    completionFraction\n                    programCompletion\n                  }\n                }\n              }\n            }\n          }\n        }\n        plansSummary {\n          summary\n          metricsPerBand\n        }\n      }\n      ... on NightPlansError {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query version {\n    version {\n      version\n      changelog\n    }\n  }\n"): (typeof documents)["\n  query version {\n    version {\n      version\n      changelog\n    }\n  }\n"];

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