import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { initialState } from 'src/redux/modules/game';
import PlayerInformation, { PlayerInformationProps } from '.';

export default {
  title: 'Molecules/PlayerInformation',
  component: PlayerInformation,
  argTypes: {
    gamePlayer: {
      control: {
        type: 'select',
        options: {
          Player1: initialState.players.black,
          Player2: initialState.players.white,
        },
      },
    },
  },
};

const Template: Story<PlayerInformationProps> = (args) => (
  <PlayerInformation {...args} />
);

export const normal = Template.bind({});

normal.args = {
  gamePlayer: initialState.players.black,
};
