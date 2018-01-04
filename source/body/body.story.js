import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Body from './index';

storiesOf('Body', module)
  .add('Default', () => (
    <Body>
      <View>
        <Text>Body 1</Text>
      </View>
    </Body>
  ))
  .add('Custom color', () => (
    <Body backgroundColor="red">
      <View>
        <Text>Body with custom color</Text>
      </View>
    </Body>
  ));