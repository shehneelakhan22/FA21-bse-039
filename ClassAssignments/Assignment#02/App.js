// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ToDoScreen } from './src/Screens';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <ToDoScreen/>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
},
content: {},
});
