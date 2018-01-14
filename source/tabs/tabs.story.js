import React from 'react';
import { storiesOf, CenterView } from '../../../storybook/helpers/index';

import { Text, View } from 'react-native';
import Tabs from './index';
import Tab from '../tab';

const styles = {
  text: {
    color: '#ccc',
    fontWeight: '400',
  },
};

storiesOf('Tabs', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Tabs>
        <Tab title={<Text>novos <Text style={styles.text}>(11)</Text></Text>}>
          <Text>
            Text 1
          </Text>
        </Tab>
        <Tab title="usados">
          <Text>
            Text 2
          </Text>
        </Tab>
      </Tabs>
    </View>
  ));