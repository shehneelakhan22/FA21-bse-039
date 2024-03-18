import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COUNTER</Text>
      <View style={styles.counterContainer}>
        <Button
          title='Decrease'
          color='red'
          onPress={() => setCount(count - 1)}
          disabled={count === 0}
        />
        <Text style={styles.counterText}>{count}</Text>
        <Button
          title='Increase'
          color='green'
          onPress={() => setCount(count + 1)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});