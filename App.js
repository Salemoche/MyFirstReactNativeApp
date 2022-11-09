import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Pressable onPress={ () => setCount( count + 1 ) } onLongPress={ () => setCount( count + 10 ) } style={[ styles.pressable, styles.topLeft ]}></Pressable>
            <Pressable onPress={ () => setCount( count + 1 ) } onLongPress={ () => setCount( count + 10 ) } style={[ styles.pressable, styles.topRight ]}></Pressable>
            <Pressable onPress={ () => setCount( count + 1 ) } onLongPress={ () => setCount( count + 10 ) } style={[ styles.pressable, styles.bottomLeft ]}></Pressable>
            <Pressable onPress={ () => setCount( count + 1 ) } onLongPress={ () => setCount( count + 10 ) } style={[ styles.pressable, styles.bottomRight ]}></Pressable>
            <View pointerEvents='none' style={ styles.counter }>
                <Text style={{ fontSize: 30 }}>{ count }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    counter: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '100',
    },
    pressable: {
        flexBasis: '50%',
        height: '50%'
    },
    topLeft: {
        backgroundColor: '#ff0',
    },
    topRight: {
        backgroundColor: '#f0f',
    },
    bottomLeft: {
        backgroundColor: '#0ff',
    },
    bottomRight: {
        backgroundColor: '#fff',
    },
});
