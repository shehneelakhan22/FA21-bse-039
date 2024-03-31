import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StudentRecord from './screen/StudentRecord';

export default function App() {
  return (
    <>
     <View style={styles.container}>
         <StudentRecord></StudentRecord>
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

