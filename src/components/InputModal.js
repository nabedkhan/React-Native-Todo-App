import { Entypo } from '@expo/vector-icons';
import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    // eslint-disable-next-line prettier/prettier
    View
} from 'react-native';

const InputModal = ({ visible, setVisible, setTask, handlePress, task }) => (
    <Modal transparent visible={visible} onRequestClose={() => setVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <Entypo name="cross" size={24} color="black" style={styles.icon} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Write a new todo.."
                onChangeText={(text) => setTask(text)}
                value={task}
            />
            <TouchableHighlight onPress={handlePress} underlayColor="white">
                <Text style={styles.button}>Submit</Text>
            </TouchableHighlight>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput: {
        backgroundColor: '#E8EAED',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 300,
    },
    button: {
        width: 300,
        textAlign: 'center',
        backgroundColor: '#55BCF6',
        marginTop: 10,
        padding: 10,
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase',
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
        top: 20,
        right: 20,
    },
});

export default InputModal;
