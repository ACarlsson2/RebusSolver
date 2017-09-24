import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

const styles = {
    container: {
        paddingLeft: 20
    },
    name: {
        fontSize: 15
    },
    square: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 20
    }
};
const renderPlaces = places => {
    if (places.length === 0) {
        console.log('renderPlaces1:', places);
        return null;
    }
    console.log('renderPlaces2', places[0]);
    return places.map(place => (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={styles.square}>{place.square}</Text>
        </View>
    ));
};

class placeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchResult } = this.props;
        return <ScrollView style={styles.container}>{renderPlaces(searchResult)}</ScrollView>;
    }
}

export default placeList;
