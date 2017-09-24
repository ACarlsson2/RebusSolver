import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './src/main/store.js';
import MainContainer from './src/main/containers/main.js';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainContainer />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});
