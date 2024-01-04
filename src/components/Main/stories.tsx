import { Meta, StoryObj } from '@storybook/react';

import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'components/Main',
  component: Main,
  parameters: {
    latouy: 'fullscreen',
  },
};

export default meta;
export const Default: StoryObj = {};

export const Alternativo: StoryObj = {
  args: {
    title: 'Techs Frontend top',
    description: 'React, TS, Next.js, Storybook, etc..',
  },
};
