import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ToDoScreen = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [editingItemIndex, setEditingItemIndex] = useState(null);

  const handleAddItem = () => {
    if (textInput.trim() === '') {
      return;
    }

    if (editingItemIndex !== null) {
      const newTodoItems = [...todoItems];
      newTodoItems[editingItemIndex] = textInput;
      setTodoItems(newTodoItems);
      setEditingItemIndex(null);
    } else {
      setTodoItems([...todoItems, textInput]);
    }

    setTextInput('');
  };

  const handleEditItem = (index) => {
    setTextInput(todoItems[index]);
    setEditingItemIndex(index);
  };

  const handleDeleteItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity onPress={() => handleEditItem(index)}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteItem(index)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo Item"
        value={textInput}
        onChangeText={setTextInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>{editingItemIndex !== null ? 'Update' : 'Add'}</Text>
      </TouchableOpacity>
      <FlatList
        data={todoItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  editButtonText: {
    color: 'green',
    marginRight: 10,
  },
  deleteButtonText: {
    color: 'red',
  },
  list: {
    flex: 1,
  },
});

export default ToDoScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// const ToDoScreen = () => {
//   const [todos, setTodos] = useState([]);
//   const [textInput, setTextInput] = useState('');

//   const addTodo = () => {
//     if (textInput.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: textInput }]);
//       setTextInput('');
//     }
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const editTodo = (id, newText) => {
//     setTodos(todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, text: newText };
//       }
//       return todo;
//     }));
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.item}>
//         <TextInput
//           value={item.text}
//           onChangeText={(newText) => editTodo(item.id, newText)}
//           style={styles.input}
//         />
//         <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.button}>
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Todo List</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           value={textInput}
//           onChangeText={(text) => setTextInput(text)}
//           placeholder="Add Todo"
//           style={styles.input}
//         />
//         <TouchableOpacity onPress={addTodo} style={styles.button}>
//           <Text style={styles.buttonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={todos}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
// });

// export default ToDoScreen;

