import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NightPlanSummary from '../components/NightPlansList/NightPlanSummary';
import NightPlansList from '../components/NightPlansList';


const meta: Meta<typeof NightPlansList> = {
    title:'SCHEDULER/Night Plan List', 
    component:  NightPlansList,
};

export default meta;

type Story = StoryObj<typeof NightPlansList>;

export const Normal: Story = {
    args:{
        plans: {
            "sitePlans": [
                {
                  "nightIdx": 0,
                  "plansPerSite": [
                    {
                      "site": "GS",
                      "startTime": "2018-09-30T23:36:00.000005+00:00",
                      "endTime": "2018-10-01T09:29:00.000017+00:00",
                      "visits": [
                        {
                          "startTime": "2018-09-30T23:36:00.000005+00:00",
                          "obsId": "GS-2018B-Q-105-77",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-01T01:03:00.000005+00:00",
                          "obsId": "GS-2018B-Q-105-28",
                          "atomStartIdx": 0,
                          "atomEndIdx": 9
                        },
                        {
                          "startTime": "2018-10-01T03:43:00.000005+00:00",
                          "obsId": "GS-2018B-Q-105-87",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-01T04:03:00.000005+00:00",
                          "obsId": "GS-2018B-Q-102-70",
                          "atomStartIdx": 0,
                          "atomEndIdx": 4
                        },
                        {
                          "startTime": "2018-10-01T04:14:00.000005+00:00",
                          "obsId": "GS-2018B-Q-105-79",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-01T06:11:00.000005+00:00",
                          "obsId": "GS-2018B-Q-102-23",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-01T06:55:00.000005+00:00",
                          "obsId": "GS-2018B-Q-105-51",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-01T07:15:00.000005+00:00",
                          "obsId": "GS-2018B-Q-102-40",
                          "atomStartIdx": 0,
                          "atomEndIdx": 6
                        },
                        {
                          "startTime": "2018-10-01T08:09:00.000005+00:00",
                          "obsId": "GS-2018B-Q-104-7",
                          "atomStartIdx": 0,
                          "atomEndIdx": 0
                        },
                        {
                          "startTime": "2018-10-01T08:36:00.000005+00:00",
                          "obsId": "GS-2018B-Q-105-9",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-01T08:57:00.000005+00:00",
                          "obsId": "GS-2018B-Q-102-73",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "nightIdx": 1,
                  "plansPerSite": [
                    {
                      "site": "GS",
                      "startTime": "2018-10-01T23:37:00.000002+00:00",
                      "endTime": "2018-10-02T09:26:59.999984+00:00",
                      "visits": [
                        {
                          "startTime": "2018-10-01T23:37:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-63",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-01T23:48:00.000002+00:00",
                          "obsId": "GS-2018B-Q-105-75",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-02T01:15:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-17",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-02T01:58:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-36",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-02T02:58:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-64",
                          "atomStartIdx": 0,
                          "atomEndIdx": 4
                        },
                        {
                          "startTime": "2018-10-02T03:09:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-30",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-02T04:02:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-80",
                          "atomStartIdx": 0,
                          "atomEndIdx": 9
                        },
                        {
                          "startTime": "2018-10-02T04:15:00.000002+00:00",
                          "obsId": "GS-2018B-Q-104-21",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-02T05:21:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-28",
                          "atomStartIdx": 0,
                          "atomEndIdx": 8
                        },
                        {
                          "startTime": "2018-10-02T06:17:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-52",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-02T07:10:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-72",
                          "atomStartIdx": 0,
                          "atomEndIdx": 9
                        },
                        {
                          "startTime": "2018-10-02T07:23:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-32",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-02T08:13:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-67",
                          "atomStartIdx": 0,
                          "atomEndIdx": 12
                        },
                        {
                          "startTime": "2018-10-02T08:26:00.000002+00:00",
                          "obsId": "GS-2018B-Q-102-42",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        }
                      ]
                    }
                  ]
                },
                {
                  "nightIdx": 2,
                  "plansPerSite": [
                    {
                      "site": "GS",
                      "startTime": "2018-10-02T23:37:59.999998+00:00",
                      "endTime": "2018-10-03T09:25:59.999987+00:00",
                      "visits": [
                        {
                          "startTime": "2018-10-02T23:37:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-57",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-03T00:21:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-79",
                          "atomStartIdx": 0,
                          "atomEndIdx": 9
                        },
                        {
                          "startTime": "2018-10-03T00:34:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-75",
                          "atomStartIdx": 0,
                          "atomEndIdx": 4
                        },
                        {
                          "startTime": "2018-10-03T00:45:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-68",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-03T00:56:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-81",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-03T02:53:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-61",
                          "atomStartIdx": 0,
                          "atomEndIdx": 10
                        },
                        {
                          "startTime": "2018-10-03T03:07:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-44",
                          "atomStartIdx": 0,
                          "atomEndIdx": 5
                        },
                        {
                          "startTime": "2018-10-03T03:48:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-14",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-03T04:09:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-50",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-03T04:25:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-65",
                          "atomStartIdx": 0,
                          "atomEndIdx": 4
                        },
                        {
                          "startTime": "2018-10-03T04:36:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-34",
                          "atomStartIdx": 0,
                          "atomEndIdx": 6
                        },
                        {
                          "startTime": "2018-10-03T06:13:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-92",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-03T06:35:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-90",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-03T07:04:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-69",
                          "atomStartIdx": 0,
                          "atomEndIdx": 4
                        },
                        {
                          "startTime": "2018-10-03T07:15:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-74",
                          "atomStartIdx": 0,
                          "atomEndIdx": 4
                        },
                        {
                          "startTime": "2018-10-03T07:26:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-49",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        },
                        {
                          "startTime": "2018-10-03T07:42:59.999998+00:00",
                          "obsId": "GS-2018B-Q-102-11",
                          "atomStartIdx": 0,
                          "atomEndIdx": 7
                        },
                        {
                          "startTime": "2018-10-03T08:37:59.999998+00:00",
                          "obsId": "GS-2018B-Q-105-52",
                          "atomStartIdx": 0,
                          "atomEndIdx": 1
                        }
                      ]
                    }
                  ]
                }
              ]
        }
    }
}
