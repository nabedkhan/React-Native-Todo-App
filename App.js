import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handlePress = () => {
        setTaskList([...taskList, { title: task, id: new Date().getMilliseconds() }]);
        setTask('');
    };

    const handleDelete = (id) => {
        const tasks = taskList.filter((item) => item.id !== id);
        setTaskList(tasks);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Today&lsquo;s Tasks</Text>
            </View>

            <ScrollView style={styles.scroll}>
                {taskList.map((item) => (
                    <Task key={item.id} item={item} handleDelete={handleDelete} />
                ))}
            </ScrollView>

            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Write a Task..."
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />

                <TouchableOpacity
                    style={styles.addIconWrapper}
                    onPress={handlePress}
                    disabled={task === ''}
                >
                    <Text style={styles.addIcon}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8EAED',
        padding: 20,
        flex: 1,
    },
    heading: {
        color: '#1A1A1A',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#55BCF6',
    },
    scroll: {
        marginTop: 20,
        maxHeight: 500,
    },
    taskWrapper: {
        marginTop: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        width: '100%',
        margin: 20,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        width: '80%',
    },
    addIconWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        fontSize: 24,
        color: '#C0C0C0',
    },
});
