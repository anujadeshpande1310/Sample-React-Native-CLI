import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countActions from './actions/counts';

class Counter extends Component {
  decrementCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const {count} = this.props;
    console.log(count);
    return (
      <SafeAreaView styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text style={styles.textCenter}>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign({}, countActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
