import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export class Rcd extends Component {

    render() {

        return (

            <Text style={styles.aaaaa}>this</Text>
        );

    }
}

const styles = StyleSheet.create({

    // container: {
    //     flex: 1,
    //     backgroundColor: 'gray',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    aaaaa: {

        textAlign: 'center',
        color: 'red',
        backgroundColor: 'black',
    },

    instructions: {
        textAlign: 'center',
        // color: '#333333',
        // marginBottom: 5,
    },

})