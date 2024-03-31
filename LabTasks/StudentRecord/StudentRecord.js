import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, ScrollView, Text } from 'react-native';

const StudentRecord = () => {
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [searchGpa, setSearchGpa] = useState('');
  const [students, setStudents] = useState([]);

  const addRecord = () => {
    if (name.trim() === '' || isNaN((gpa))) {
      Alert.alert('Error', 'Please enter valid name and GPA');
      return;
    }
  
    const newStudent = { name, gpa };
    setStudents([...students, newStudent]);
    setName('');
    setGPA('');
  };
  
  

  const searchRecord = () => {
    if (isNaN(gpa)) {
      Alert.alert('Error', 'Please enter GPA to search student record.');
      return;
    }

    const student = students.find(student => student.gpa === searchGpa);
    if (student) {
      Alert.alert('Student Record', `Name: ${student.name}\nRoll Number: ${student.gpa}`);
    } else {
      Alert.alert('Student Record', 'Student not found');
    }
  };
  const clearAllRecords = () => {
    setStudents([]);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
      />
      <Text style={styles.label}>GPA:</Text>
      <TextInput
        style={styles.input}
        value={gpa}
        onChangeText={text => setGPA(text)}
        placeholder="Enter GPA"
      />

     <View style={styles.buttonContainer}>
     <View style={styles.buttonStyle}>
     <Button onPress={addRecord} title="Add" />
     </View>
     <View style={styles.buttonStyle}>
    <Button onPress={searchRecord} title="Search" />
    </View>
         </View>
      
      <TextInput
        style={styles.input}
        value={searchGpa}
        onChangeText={text => setSearchGpa(text)}
        placeholder="Search by GPA"
      />

      <Text style={styles.heading}>Records:</Text>
      <ScrollView>
        {students.map((student, index) => (
          <View key={index} style={styles.student}>
            <Text>{`${student.name} , ${student.gpa}`}</Text>
          </View>
        ))}
      </ScrollView>
      <Button onPress={clearAllRecords} title="Clear All" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems:"center",
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    minWidth: 50,
  },
  heading: {
    marginRight: 10,
    minWidth: 100,
    fontWeight: 'bold',
    fontSize:30,
    fontStyle:'italic',
  },
  buttonStyle: {
    width: 80,
  },
  student: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius:20,
  },
});


export default StudentRecord;