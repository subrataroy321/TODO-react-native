import React, {useState} from 'react'
import { View, Text } from 'react-native'

const Todo = (props) => {

    return (
        <View>
            { props.delete 
            ? 
            <Text style={{fontSize: 20, margin: 5, color: 'white'}} onPress={ () => props.delete(props.todo)} >{props.todo}</Text>
            :
            <Text style={{fontSize: 20, margin: 5, color: 'white'}} >{props.todo}</Text>  
            }
        </View>
    )
}

export default Todo
