import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Task = ({ item, handleDelete, handleEdit }) => (
    <View style={styles.container}>
        <View style={styles.leftSide}>
            <Text style={styles.heading}>{item.title}</Text>
        </View>

        <View style={styles.right}>
            <TouchableHighlight onPress={() => handleEdit(item.id)} underlayColor="#fff">
                <Feather name="edit" size={18} color="#55BCF6" />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleDelete(item.id)} underlayColor="#fff">
                <Entypo name="cross" size={20} color="#55BCF6" />
            </TouchableHighlight>
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
        maxWidth: '80%',
    },
    heading: {
        fontSize: 16,
        marginLeft: 10,
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
    },
});

export default Task;
