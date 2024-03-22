import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const dummyData =[{ 
    id: "01",
    title: "Wash Car"
},
{
   id: "02",
   title: "Read A Book"
}]

console.log(Data.now().toString())
const ToDoScreen = () => {

    // init local state
    const[todo, setTodo] = useState("")
    const[todolist, setTodolist] = useState([])

    // handle add todo
    const handleAddTodo = () =>{
         setTodolist([...setTodolist, {id: Data.now().toString(), title: todo}]);
         setTodo("");
    };

    // render todo
    const renderTodos = ({item, index}) => {
     return(
        <View style={{
        backgroundColor: "#1e90ff", 
        borderRadius: 6, 
        paddingHorizontal:6,
        paddingVertical: 12,
        marginBottom:12,
        flexDirection:"row",
        alignItems:"center"
        }}>
            <Text style={{color:"#fff", fontSize: 20, fontWeight:800, flex: 1}}>{item.title}</Text>
            <IconButton icon="pencil" iconColor="#fff" />
            <IconButton icon="trash-can" iconColor="#fff" />
        </View>
     )
}
    return (
        <View style={{ marginHorizontal: 16 }}>
            <Text>To-do Screen</Text>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "#1e90ff",
                    borderRadius: 6,
                    paddingVertical: 12,
                    paddingHorizontal: 16
                }}
                placeholder="Add a task"
                value={Todo}
                onChangeText={(userTest)=> setTodo(userTest)}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 8,
                    marginVertical: 24,
                    alignItems: "center"
                }}
                onPress={() => handleAddTodo()}
            >
                <Text style={{ color: "#fff", textAlign: "center", fontWeight:"bold" }}>Add</Text>
            </TouchableOpacity>

            <FlatList data={todolist} renderItem={renderTodos}/>
        </View>
    );
};

export default ToDoScreen;

const styles = StyleSheet.create({});
