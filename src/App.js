import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputModal from './components/InputModal';
import Task from './components/Task';

export default function App() {
    const [task, setTask] = useState('');
    const [taskEditId, setTaskEditId] = useState();
    const [visible, setVisible] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const handlePress = () => {
        if (taskEditId) {
            const filter = taskList.map((item) =>
                item.id === taskEditId ? { ...item, title: task } : item
            );
            setTaskList(filter);
            setTaskEditId();
        } else {
            setTaskList([...taskList, { title: task, id: new Date().getMilliseconds() }]);
        }

        setTask('');
        setVisible(false);
    };

    const handleDelete = (id) => {
        const tasks = taskList.filter((item) => item.id !== id);
        setTaskList(tasks);
    };

    const handleEdit = (id) => {
        const taskItem = taskList.find((item) => item.id === id);
        setTaskEditId(taskItem.id);
        setTask(taskItem.title);
        setVisible(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <Text style={styles.heading}>Current Todo List</Text>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <MaterialCommunityIcons name="plus" size={25} color="#55BCF6" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={taskList}
                renderItem={({ item }) => (
                    <Task item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {visible && (
                <InputModal
                    visible={visible}
                    setVisible={setVisible}
                    setTask={setTask}
                    task={task}
                    handlePress={handlePress}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: '#E8EAED',
        padding: 20,
        flex: 1,
    },
    topArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#55BCF6',
        paddingBottom: 8,
        marginVertical: 20,
    },
    heading: {
        color: '#1A1A1A',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
