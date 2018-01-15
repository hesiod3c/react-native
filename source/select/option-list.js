import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableWithoutFeedback, ViewPropTypes } from 'react-native';

class OptionList extends React.Component {
  render() {
    const { style, children, onSelect, selectedStyle, selected } = this.props;
    const renderedItems = React.Children.map(children, (item, key) => {
      if (!item) return null;

      return (
        <TouchableWithoutFeedback key={key} onPress={() => onSelect(item.props.children, item.props.value)}>
          <View style={[item.props.value === selected ? selectedStyle : null]}>
            {item}
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return (
      <View style={[styles.scrollView, style]}>
        <ScrollView automaticallyAdjustContentInsets={false} bounces={false}>
          {renderedItems}
        </ScrollView>
      </View>
    );
  }
}

OptionList.defaultProps = {
  onSelect: () => {},
};

OptionList.propTypes = {
  style: ViewPropTypes.style,
  onSelect: PropTypes.func,
};

const styles = {
  scrollView: {
    height: 120,
    width: 300,
    borderWidth: 1,
  },
};

export default OptionList;
