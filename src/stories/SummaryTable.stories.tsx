import type { Meta, StoryObj } from '@storybook/react';


import SummaryTable, { Summary } from '../components/SummaryTable/SummaryTable';

const meta: Meta<typeof SummaryTable> = {
    title: 'Scheduler/ SummaryTable',
    component: SummaryTable
};

export default meta;
type Story = StoryObj<typeof SummaryTable>;

const default_summary: Summary[] = [
    {program: "GS-2018B-Q-201",
    completed: "90%",
    score: '2.3405' },
    {program: "GS-2018B-Q-217",
    completed: "40%",
    score: '1.905' },
    {program: "GN-2019A-FT-201-9",
    completed: "10%",
    score: '1.0405' },
]

export const Regular: Story = {
    args: {
        summaries: default_summary
    }
  };