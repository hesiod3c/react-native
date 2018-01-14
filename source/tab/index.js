import React from 'react';
import { View } from 'react-native';

class Tab extends React.Component {
  render() {
    const { children, title, style } = this.props;
    return (
      <View title={title} style={[styles.body, style]}>
        {children}
      </View>
    );
  }
}

const styles = {
  body: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
};

export default Tab;
