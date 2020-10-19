import { Dimensions, StyleSheet } from 'react-native';

// colors
const colors = {
    black: '#303e45',
    color1: '#a7b6bd',
    color2: '#4a636e',
    orange: '#ff9b31',
    input: '#e0e0e0',
}

// Main.js
const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },

    banner: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    todoText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.orange,

    },

    todoCount: {
        fontSize: 25,
        color: colors.orange,
    },
    emptyComponent: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
});

// ttodoInput.js
const todoInput = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 5
    },
    inputContainer: {
        backgroundColor: colors.input,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10
    },
    buttonContainer: {
        backgroundColor: colors.color2,
        padding: 10,
        margin: 10,
        width: Dimensions.get('window').width / 2.5,
        alignSelf: 'center',
        borderRadius: 8

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }



})

// ttodocard.js
const todoCard = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        padding: 8,
        margin: 5,
        borderRadius: 7
    },
    text: {
        fontSize: 18,
    }
})

export { main, todoInput, todoCard }; 