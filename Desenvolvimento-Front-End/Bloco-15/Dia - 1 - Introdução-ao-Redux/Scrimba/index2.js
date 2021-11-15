const redux = require("redux");

function increment() {
    return {
        type: 'INCREMENT'
    }
}

function decrement() {
    return {
        type: 'DECREMENT'
    }
}

function double() {
    return{
        type: 'DOUBLE'
    }
}

function halve() {
    return {
        type: 'HALVE'
    }
}

function reducer( state = {count : 0}, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                state : state.count + 1
            }
        case 'DECREMENT':
            return{
                state: state.count -1
            }
        case 'DOUBLE':
            return {
                state: state.count * 2
            }
            case 'HALVE':
                return {
                    state: Math.round(state.count / 2) 
                }
        default:
        return state
    }
}