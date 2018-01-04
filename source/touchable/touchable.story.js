import React from 'react';
import { View, Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Touchable from './index';

storiesOf('Touchable', module)
  .add('Default', () => (
    <Touchable>
      <View>
        <Text>Clique aqui</Text>
      </View>
    </Touchable>
  ));