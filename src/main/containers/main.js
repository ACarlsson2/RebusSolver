import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Input from '../components/input';
import PlaceList from '../components/placeList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    searchString: state.searchString,
    searchResult: state.searchResult
});
const mapDispatchToProps = dispatch => ({
    updateSearchString: searchString => {
        dispatch({ type: 'SEARCH_STRING', text: searchString });
    },
    updateSearchResult: list => {
        dispatch({ type: 'UPDATE_SEARCH_RESULT', places: list });
    }
});

const styles = {
    container: {
        padding: 0
    },
    title: {
        paddingTop: 10,
        paddingBottom: 20,
        color: 'black',
        fontSize: 40,
        textAlign: 'center'
    }
};

class main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>RebusSolver4000</Text>
                <Input {...this.props} />
                <PlaceList {...this.props} />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(main);
