
import { graphql } from '../../gql';


export const newScheduleMutationDocument = graphql(/* GraphQL */`
    mutation NewSchedule($startTime: String!, $endTime: String!, $site: Sites! ) {
        newSchedule(
            newScheduleInput: {startTime: $startTime, 
                               endTime: $endTime,
                               site: $site}
        ) {
            __typename
            ... on NewScheduleSuccess {
            success
            }
            ... on NewScheduleError {
            error
            }
        }
    }
`);
