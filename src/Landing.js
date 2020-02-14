import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'native-base';

let myBackground = require('../assets/icons/landing.jpg');

const Landing = ({ switchScreen }) => {
    return (
        <View>
            <Image source={myBackground}>
                <View style={styles.viewStyle}>
                    <Text
                        style={styles.titleStyle}
                    >Welcome to PokeSearch</Text>
                    <Button
                        block={true}
                        style={styles.buttonStyle}
                        onPress={() => switchScreen("search")}
                    >
                        <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                </View>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        color: 'blue',
        alignItems: 'center'
    },
    buttonStyle: {
        margin: 10
    },
    buttonText: {
        color: 'white'
    }
});

export default Landing
