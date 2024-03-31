import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Lab2903 from './screen/Lab2903';
import Chessboard from './screen/ChessBoard';

export default function App() {
  return (
    <>
     <View style={styles.container}>
         <Lab2903></Lab2903>
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
