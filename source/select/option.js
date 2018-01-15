import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';

class Option extends React.Component {
  render() {
    const { style, styleText } = this.props;
    return (
      <View style={[styles.item, style]}>
        <Text style={[styles.optionText, styleText]}>
          {' '}{this.props.children}{' '}
        </Text>
      </View>
    );
  }
}

Option.propTypes = {
  style: ViewPropTypes.style,
  styleText: Text.propTypes.style,
  children: PropTypes.string.isRequired,
};

const styles = {
  item: {
    padding: 10,
  },
  optionText: {
    fontSize: 14,
  },
};

export default Option;
