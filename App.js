import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import Todo from './Todo'
import image from './assets/ec1f713f49cc6d6556184969ac9d2efd.jpg'

export default function App() {
  let [input, setInput] = useState('')
  let [todoList, setTodoList] = useState([])
  let [doneList, setDoneList] = useState([])
  
  const addTodo = () => {
    setTodoList([input, ...todoList]);
    setInput('')
  }
  
  const clearTodo = () => {
    setTodoList([]);
    setDoneList([])
  }
  
  const deleteTodo = (todo) => {
    setDoneList([todo, ...doneList])

    let temp = todoList.filter(function(item) {
      return item !== todo
    })
    setTodoList(temp)
  }
  
  const showTodos = todoList.length !== 0 ? 
    todoList.map((todo, i) => (
      <Todo key={i} todo={todo} delete={deleteTodo} />
    ))
    :
    <Text style={{fontSize: 20, color: 'white'}}>Nothing Added To List Yet!</Text>

  return (
    <>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 100, color: 'white'}}>TODO</Text>
            <TextInput style={styles.input} value={input} onChangeText={ text => setInput(text)}/>
            <View style={styles.buttonContainer}>
              <Button title='Add To List' onPress={addTodo} color="#faebd7" style={{marginBottom: 10}}/>
              { todoList.length !== 0 || doneList.length !== 0 ?
                <Button title='Clear List' onPress={clearTodo}  color="red"/>
                :
                <Text></Text> }
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 10, color: 'white'}}>Things to do yet!</Text>
            <ScrollView>
              { showTodos }
              {doneList.length !== 0 ?
              <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 10, color: 'white'}} >Tasks Completed</Text>
              :
              <Text></Text>
              }
              {doneList.map((todo, i) => (
                <Todo key={i} todo={todo} />
              ))}
            </ScrollView>
            <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
    width: 300,
    height: 40,
    margin: 20
  },
  image: {
    backgroundColor: 'black',
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    opacity: 0.8,
  },
  buttonContainer: {
    flex: 0.1,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection: "column"
    
  }
});
