import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

const Indicator = ({ direction, size, color, style }) => {
  const styles = getStyles(size, color);

  if (direction === 'up') return <View style={[styles.triangle, style]} />;
  else if (direction === 'down') return <View style={[styles.triangle, styles.triangleDown, style]} />;

  return null;
};

const getStyles = (size, color) => {
  return {
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: size / 2,
      borderRightWidth: size / 2,
      borderBottomWidth: size,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
    },
    triangleDown: {
      transform: [{ rotate: '180deg' }],
    },
  };
};

Indicator.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default Indicator;
