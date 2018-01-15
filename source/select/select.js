import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, Modal, ViewPropTypes } from 'react-native';

import OptionList from './option-list';
import Indicator from './indicator';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.selected = this.props.selected;
    this.state = {
      modalVisible: false,
      defaultText: this.props.defaultText,
      selected: this.props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected == null) {
      this.setState({
        defaultText: nextProps.defaultText,
      });
    }
  }

  onSelect(label, value) {
    this.props.onSelect(value, label);
    this.setState({
      modalVisible: false,
      defaultText: label,
    });
  }

  onClose() {
    this.setState({
      modalVisible: false,
    });
  }

  onPress() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  onModalPress() {
    this.setState({
      modalVisible: false,
    });
  }

  setSelectedText(text) {
    this.setState({
      defaultText: text,
    });
  }

  render() {
    let {
      style,
      textStyle,
      backdropStyle,
      optionListStyle,
      transparent,
      animationType,
      indicator,
      indicatorColor,
      indicatorSize,
      indicatorStyle,
      indicatorIcon,
      selectedStyle,
      selected,
    } = this.props;

    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
          <View style={[styles.selectBox, style]}>
            <View style={styles.selectBoxContent}>
              <Text style={textStyle}>{this.state.defaultText}</Text>
              {indicatorIcon
                ? indicatorIcon
                : <Indicator
                    direction={indicator}
                    color={indicatorColor}
                    size={indicatorSize}
                    style={indicatorStyle}
                  />}
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Modal
          transparent={transparent}
          animationType={animationType}
          visible={this.state.modalVisible}
          onRequestClose={this.onClose.bind(this)}
          supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <TouchableWithoutFeedback onPress={this.onModalPress.bind(this)}>
            <View style={[styles.modalOverlay, backdropStyle]}>
              <OptionList
                onSelect={this.onSelect.bind(this)}
                selectedStyle={selectedStyle}
                selected={selected}
                style={[optionListStyle]}
              >
                {this.props.children}
              </OptionList>
            </View>
          </TouchableWithoutFeedback>

        </Modal>
      </View>
    );
  }
}

Select.defaultProps = {
  defaultText: 'Selecione',
  onSelect: () => {},
  transparent: false,
  animationType: 'none',
  indicator: 'none',
  indicatorColor: '#ccc',
  indicatorSize: 10,
  indicatorIcon: null,
};

Select.propTypes = {
  style: ViewPropTypes.style,
  defaultText: PropTypes.string,
  onSelect: PropTypes.func,
  textStyle: Text.propTypes.style,
  backdropStyle: ViewPropTypes.style,
  optionListStyle: ViewPropTypes.style,
  indicator: PropTypes.string,
  indicatorColor: PropTypes.string,
  indicatorSize: PropTypes.number,
  indicatorStyle: ViewPropTypes.style,
  indicatorIcon: PropTypes.element,
};

const styles = {
  selectBox: {
    borderRadius: 5,
    borderWidth: 1,
    minWidth: '100%',
    padding: 10,
    borderColor: '#ccc',
  },
  selectBoxContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Select;
