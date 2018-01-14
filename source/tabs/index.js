import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    return () => this.setState({ activeTab: index });
  }

  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          {[...children].map(({ props: { title } }, index) => (
            <TouchableOpacity
              style={[styles.tab, index === this.state.activeTab ? styles.activeTab : []]}
              onPress={this.handleClick(index)}
              key={title}
            >
              <Text style={styles.text}>
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.content}>
          {children[this.state.activeTab]}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    minWidth: '100%',
  },
  tabs: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
  },
  tab: {
    flex: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#ccc',
    marginBottom: -1,
  },
  activeTab: {
    borderColor: '#ccc',
    borderBottomColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
};

export default Tabs;
