import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TodoInput, TodoCard } from './components'

// Style file
import { main } from './style';


const App = () => {

    const [list, setList] = useState([]);

    function addTodo(text) {

        const todoItem = {
            id: list.length,
            todo: text,
            isDone: false,
        }

        const newArray = [...list];
        newArray.push(todoItem);
        setList(newArray);

        // setList(list => [todoItem, ...list]);
    }

    function doneTodo(todoId) {

        const newArray = [...list];
        const todoIndex = newArray.findIndex(item => item.id == todoId);
        newArray[todoIndex].isDone = !newArray[todoIndex].isDone;
        setList(newArray);
    }

    function removeTodo(todoId) {
        const newArray = [...list];
        const todoIndex = newArray.findIndex(item => item.id == todoId);
        newArray.splice(todoIndex, 1);
        setList(newArray);
    }

    const renderTodo = ({ item }) => {
        return (
            <TodoCard
                data={item}
                onDone={() => doneTodo(item.id)}
                onRemove={() => removeTodo(item.id)}
            />
        );

    }

    return (
        <View style={main.container}>
            <View style={main.banner}>
                <Text style={main.todoText}>TODO</Text>
                <Text style={main.todoCount}>{list.filter(item => item.isDone == false).length}</Text>
            </View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={list}
                renderItem={renderTodo}
                ListEmptyComponent={() => <Text style={main.emptyComponent}>Nothing To Do..</Text>}
            />
            <TodoInput
                onTodoEnter={text => addTodo(text)}
            />
        </View>
    );
}

export default App;
