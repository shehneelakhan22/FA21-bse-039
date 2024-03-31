// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ToDoScreen } from './src/Screens';


export default function App() {
  return (
    <>
    <View style={styles.container}>
      <ToDoScreen></ToDoScreen>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
