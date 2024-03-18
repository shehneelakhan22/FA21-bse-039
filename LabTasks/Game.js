import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Numbering</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>User Input</Text>
      </View>

      <View style={styles.buttonContainer}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <TouchableOpacity key={number} style={styles.button}>
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default GameLayout;