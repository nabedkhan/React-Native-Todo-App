import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = ({ item, handleDelete }) => (
    <View style={styles.container}>
        <View style={styles.leftSide}>
            {/* <View style={styles.box} /> */}
            <Text style={styles.heading}>{item.title}</Text>
        </View>

        <View style={styles.rightSide}>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={styles.cross}>x</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSide: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // flexWrap: 'wrap',
        maxWidth: '80%',
    },
    // box: {
    //     width: 25,
    //     height: 25,
    //     borderRadius: 5,
    //     backgroundColor: '#55BCF6',
    //     opacity: 0.6,
    // },
    heading: {
        fontSize: 16,
        marginLeft: 10,
        // textDecorationLine: 'line-through',
    },
    rightSide: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: '#55BCF6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    cross: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#55BCF6',
        lineHeight: 17,
    },
});

export default Task;
