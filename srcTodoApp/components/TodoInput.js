import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { todoInput } from '../style';

const TodoInput = (props) => {

    const [text, setText] = useState('');

    return (
        <View style={todoInput.container}>
            <View style={todoInput.inputContainer}>
                <TextInput
                    placeholder="Type something to do..."
                    onChangeText={(value) => {setText(value)}}
                />
            </View>
            <TouchableOpacity
                style={todoInput.buttonContainer}
                onPress={() => props.onTodoEnter(text)}
            >
                <Text style={todoInput.buttonText}>Todo Input</Text>
            </TouchableOpacity>
        </View>
    )
}

export { TodoInput };




