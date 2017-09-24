import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import places from '../../places.js';

const styles = {
    container: {
        alignItems: 'center'
    },
    input: {
        width: 250,
        height: 50,
        borderWidth: 0,
        fontSize: 20
    }
};

const filterPlaces = (searchString, func) => {
    let res = [];
    places.forEach(function(place) {
        if (place.name.toLowerCase().includes(searchString.toLowerCase())) {
            res.push(place);
        }
    });
    func(res);
};

class input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchString, updateSearchString, updateSearchResult } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        filterPlaces(text, updateSearchResult);
                        updateSearchString(text);
                    }}
                    value={searchString}
                />
            </View>
        );
    }
}

export default input;
