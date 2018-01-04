import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Container from './index';

storiesOf('Container', module)
  .add('Default', () => (
    <Container>
      <View>
        <Text>Container 1</Text>
      </View>
    </Container>
  ))
  .add('Full Container', () => (
    <Container full={true}>
      <View>
        <Text>Container 2</Text>
      </View>
    </Container>
  ));