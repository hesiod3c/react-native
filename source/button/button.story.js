import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .add('Primary', () => (
    <View>
      <Button onPress={action('clicked-text')}>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} size='large'>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} block={false}>
        <Text>Texto</Text>
      </Button>
    </View>
  ))
  .add('Secondary', () => (
    <View>
      <Button onPress={action('clicked-text')} styleType='secondary'>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} size='large' styleType='secondary'>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} block={false} styleType='secondary'>
        <Text>Texto</Text>
      </Button>
    </View>
  ))
  .add('Loading', () => (
    <View>
      <Button onPress={action('clicked-text')} loading={true}>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} styleType='secondary' loading={true}>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} size='large' loading={true}>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} block={false} loading={true}>
        <Text>Texto</Text>
      </Button>
    </View>
  ));